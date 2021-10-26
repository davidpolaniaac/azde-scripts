import * as fs from "fs-extra";
import * as path from "path";
import * as rimraf from "rimraf";
import { execSync } from "child_process";

function copySources(src: string, dest: string, element: string): void {
  const source = path.join(src, element);
  if (fs.existsSync(source)) {
    const destination = path.join(src, dest, element);
    fs.copySync(source, destination);
  }
}

function clean(src: string, folder: string): void {
  if (folder == "outDirConfig") {
    const outDir: string = getOutDirConfig(path.join(src, "tsconfig.json"));
    rimraf.sync(path.join(src, outDir));
  } else if (folder) {
    rimraf.sync(path.join(src, folder));
  }
}

export function execNpm(command: string, cwd: string): void {
  execSync("npm " + command + " -q", { cwd: cwd, stdio: [0, 1, 2] });
}

export function packageTask(command: string, baseDir: string): void {
  const outDir: string = getOutDirConfig(path.join(baseDir, "tsconfig.json"));
  copySources(baseDir, outDir, "icon.png");
  copySources(baseDir, outDir, "task.json");
  copySources(baseDir, outDir, "package.json");
  copySources(baseDir, outDir, "files");
  const packageDir = path.join(baseDir, outDir);
  execNpm(command, packageDir);
}

export function execCommand(
  command: string,
  baseDir: string,
  folderClean: string,
  operation: (command: string, dir: string) => void
): void {
  console.log(`The base folder is ${baseDir}`);
  clean(baseDir, folderClean);
  operation(command, baseDir);
}

function getOutDirConfig(tsconfigFile: string): string {
  const rawdata: Buffer = fs.readFileSync(tsconfigFile);
  const config = JSON.parse(rawdata.toString());
  let outDir: string = "dist";
  if (config && config.compilerOptions && config.compilerOptions.outDir) {
    outDir = config.compilerOptions.outDir;
  }
  return outDir;
}

export function runCommand(
  source: string,
  operation: (command: string, cwd: string) => void,
  command: string,
  folderClean: string = ""
): void {
  if (fs.existsSync(source)) {
    const PACKAGE_FILE = "package.json";
    const src = path.join(source, PACKAGE_FILE);
    if (fs.existsSync(src)) {
      execCommand(command, source, folderClean, operation);
    } else {
      fs.readdir(source, (err, files) => {
        files.forEach((taskName) => {
          let taskDir = path.join(source, taskName);
          if (!fs.lstatSync(taskDir).isDirectory()) {
            return;
          }
          // If a package.json is missing, npm will exec the install command on the parent folder. This will cause an endless install loop.
          if (fs.existsSync(path.join(taskDir, PACKAGE_FILE))) {
            // tasks/<task-name>/package.json
            execCommand(command, taskDir, folderClean, operation);
          } else {
            // tasks/<task-name>/<task-version>/package.json
            fs.readdir(taskDir, (err, taskVersionDirs) => {
              taskVersionDirs.forEach((versToBuild) => {
                let taskVersionDir = path.join(taskDir, versToBuild);
                if (fs.existsSync(path.join(taskVersionDir, PACKAGE_FILE))) {
                  execCommand(command, taskVersionDir, folderClean, operation);
                }
              });
            });
          }
        });
      });
    }
  }
}

import {Command, flags} from '@oclif/command'
import { runCommand, execNpm } from '../common';

export default class Build extends Command {
  static description = "The build command is used to invoke the build script from the package.json of each component of the extension.";

  static examples = [
    `$ azde-scripts build`,
    `$ azde-scripts build tasks`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    clean: flags.string({char: 'c', description: 'name of the folder that will be deleted before the process'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'component'}]

  async run() {
    const {args, flags} = this.parse(Build)
    
    const clean = flags.clean ?? 'outDirConfig'
    this.log(`The ${clean} directory will be removed before build`)
    if (args.component) {
      this.log(`you input --component: ${args.component}`);
      runCommand(args.component, execNpm, "run build", flags.clean);
    } else {
      this.log(`Build tasks and websites`);
      runCommand("tasks", execNpm, "run build", flags.clean);
      runCommand("websites", execNpm, "run build", flags.clean);
    }
  }
}

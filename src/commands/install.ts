import {Command, flags} from '@oclif/command'
import { runCommand, execNpm } from '../common';

export default class Install extends Command {
  static description = "The install command is used to invoke the install script from the package.json of each component of the extension.";

  static examples = [
    `$ azde-scripts install`,
    `$ azde-scripts install tasks`,
    `$ azde-scripts install tasks -n run -s custom`,
  ]
  
  static flags = {
    help: flags.help({char: 'h'}),
    clean: flags.string({char: 'c', description: 'name of the folder that will be deleted before the process'}),
    npm: flags.string({char: 'n', description: 'overrider the npm run command', default: 'i',}),
    script: flags.string({char: 's', description: 'add the npm run command script. for example `compile`', default: 'custom', dependsOn: ['npm']}),
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'component'}]

  async run() {
    const {args, flags} = this.parse(Install)
    const npmCommand = flags.npm == 'i' ? flags.npm : `${flags.npm} ${flags.script}`
    const clean = flags.clean ?? 'node_modules'
    this.log(`The ${clean} directory will be removed before build`)
    if (args.component) {
      this.log(`you input --component: ${args.component}`);
      runCommand(args.component, execNpm, npmCommand, flags.clean);
    } else {
      this.log(`Install tasks and websites`);
      runCommand("tasks", execNpm, npmCommand, flags.clean);
      runCommand("websites", execNpm, npmCommand, flags.clean);
    }
  }
}

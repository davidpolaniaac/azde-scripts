import {Command, Flags} from '@oclif/core'
import {packageTask, runCommand} from '../common'

export default class Package extends Command {
  static description = 'The package command is used to invoke the install script from the package.json of each component of the extension.';

  static flags = {
    help: Flags.help({char: 'h'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args: any = [{name: 'component'}]

  async run() {
    const {args} = await this.parse(Package)
    if (args.component) {
      this.log(`you input --component: ${args.component}`)
      runCommand(args.component, packageTask, 'i --only=production')
    } else {
      this.log('Package tasks and websites')
      runCommand('tasks', packageTask, 'i --only=production')
    }
  }
}

import {Args, Command, Flags} from '@oclif/core'
import {packageTask, runCommand} from '../common'

export default class Package extends Command {
  static args = {
    component: Args.string({description: 'component', required: false}),
  }

  static description = 'The package command is used to invoke the install script from the package.json of each component of the extension.'

  static flags = {
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
    help: Flags.help({char: 'h'}),
  }

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

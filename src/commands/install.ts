import {Args, Command, Flags} from '@oclif/core'
import {execNpm, runCommand} from '../common'

export default class Install extends Command {
  static args = {
    component: Args.string({description: 'component', required: false}),
  }

  static description = 'The install command is used to invoke the install script from the package.json of each component of the extension.'

  static examples = [
    '$ azde-scripts install',
    '$ azde-scripts install tasks',
    '$ azde-scripts install tasks -n run -s custom',
  ]

  static flags = {
    clean: Flags.string({char: 'c', description: 'name of the folder that will be deleted before the process'}),
    force: Flags.boolean({char: 'f'}),
    help: Flags.help({char: 'h'}),
    npm: Flags.string({char: 'n', default: 'i', description: 'overrider the npm run command'}),
    script: Flags.string({char: 's', default: 'custom', dependsOn: ['npm'], description: 'add the npm run command script. for example `compile`'}),
  }

  async run() {
    const {args, flags} = await this.parse(Install)
    const npmCommand = flags.npm === 'i' ? flags.npm : `${flags.npm} ${flags.script}`
    const clean = flags.clean ?? 'node_modules'
    this.log(`The ${clean} directory will be removed before build`)
    if (args.component) {
      this.log(`you input --component: ${args.component}`)
      runCommand(args.component, execNpm, npmCommand, flags.clean)
    } else {
      this.log('Install tasks and websites')
      runCommand('tasks', execNpm, npmCommand, flags.clean)
      runCommand('websites', execNpm, npmCommand, flags.clean)
    }
  }
}

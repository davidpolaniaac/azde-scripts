import {Args, Command, Flags} from '@oclif/core'
import {execNpm, runCommand} from '../common'

export default class Build extends Command {
  static args = {
    component: Args.string({description: 'component'}),
  }

  static description = 'The build command is used to invoke the build script from the package.json of each component of the extension.'

  static examples = [
    '$ azde-scripts build',
    '$ azde-scripts build tasks',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    clean: Flags.string({char: 'c', description: 'name of the folder that will be deleted before the process'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
    help: Flags.help({char: 'h'}),
  }

  async run() {
    const {args, flags} = await this.parse(Build)

    const clean = flags.clean ?? 'outDirConfig'
    this.log(`The ${clean} directory will be removed before build`)
    if (args.component) {
      this.log(`you input --component: ${args.component}`)
      runCommand(args.component, execNpm, 'run build', flags.clean)
    } else {
      this.log('Build tasks and websites')
      runCommand('tasks', execNpm, 'run build', flags.clean)
      runCommand('websites', execNpm, 'run build', flags.clean)
    }
  }
}

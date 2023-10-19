import * as yeoman from 'yeoman-environment'

import { Args, Command, Flags } from '@oclif/core'

export default class Create extends Command {
  static args = {
    type: Args.string({
      default: 'extension',
      description: 'generator type',
      name: 'type',
      options: ['extension', 'task', 'gate', 'decorator', 'website'],
      required: true,
    }),
  }

  static description = 'Generate project extension'

  static flags = {
    force: Flags.boolean({char: 'f'}),
    help: Flags.help({char: 'h'}),
  }

  async run() {
    const {args} = await this.parse(Create)
    const {type} = args
    this.log('Hello world from Generator extensions')
    const env = yeoman.createEnv()

    try {
      env.register(
        require.resolve(`generator-azure-devops-extension/generators/${type}`),
        `azure-devops-extension:${type}`,
      )
      env.run(`azure-devops-extension:${type}`)
    } catch (error) {
      this.error(`The project could not be generated, something went wrong - code: ${error.code}`)
    }
  }
}

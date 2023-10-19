import * as yeoman from 'yeoman-environment'

import {Command, Flags} from '@oclif/core'

export default class Create extends Command {
  static description = 'Generate project extension';

  static flags = {
    help: Flags.help({char: 'h'}),
    force: Flags.boolean({char: 'f'}),
  };

  static args: any = [
    {
      name: 'type',
      required: true,
      options: ['extension', 'task', 'gate', 'decorator', 'website'],
      default: 'extension',
      description: 'generator type',
    },
  ];

  async run() {
    const {args} = await this.parse(Create)
    const type = args.type
    this.log('Hello world from Generator extensions')
    const env = yeoman.createEnv()

    try {
      env.register(
        require.resolve(`generator-azure-devops-extension/generators/${type}`),
        `azure-devops-extension:${type}`
      )
      env.run(`azure-devops-extension:${type}`)
    } catch (error) {
      this.error(`The project could not be generated, something went wrong - code: ${error.code}`)
    }
  }
}

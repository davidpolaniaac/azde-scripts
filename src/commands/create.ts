import * as yeoman from 'yeoman-environment'

import {Command, flags} from '@oclif/command'

export default class Create extends Command {
  static description = 'Generate project extension';

  static flags = {
    help: flags.help({char: 'h'}),
    force: flags.boolean({char: 'f'}),
  };

  static args = [
    {
      name: 'type',
      required: true,
      options: ['extension','task', 'gate', 'decorator', 'website'],
      default: 'extension',
      description: 'generator type',
    },
  ];

  async run() {
    const {args, flags} = this.parse(Create)
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

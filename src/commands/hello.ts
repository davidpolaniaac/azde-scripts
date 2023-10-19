import {Command, Flags} from '@oclif/core'

export default class Hello extends Command {
  static description = 'Additional Information';

  static examples = ['$ azde-scripts hello David'];

  static flags = {
    help: Flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  };

  static args: any = [{name: 'name'}];

  async run() {
    const {args, flags} = await this.parse(Hello)

    const name = flags.name ? flags.name : args.name ?? 'world'
    this.log(`Hello ${name} from here`)
    this.log(`This library was created with the purpose of helping to 
more easily create the extensions of azure devops`)
  }
}

import { Command, flags } from "@oclif/command";

export default class Hello extends Command {
  static description = "Additional Information";

  static examples = [`$ azde-scripts hello David`];

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" }),
  };

  static args = [{ name: "name" }];

  async run() {
    const { args, flags } = this.parse(Hello);

    const name = flags.name ? flags.name : args.name ?? "world";
    this.log(`Hello ${name} from here`);
    this.log(`This library was created with the purpose of helping to 
more easily create the extensions of azure devops`);
  }
}

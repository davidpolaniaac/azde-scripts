import { Command, flags } from "@oclif/command";
import * as yeoman from "yeoman-environment";

export default class Create extends Command {
  static description = "Generate project extension";

  static flags = {
    help: flags.help({ char: "h" }),
    force: flags.boolean({ char: "f" }),
  };

  static args = [
    {
      name: "type",
      required: true,
      options: ["task", "website", "app"],
      default: "app",
      description: "generator type",
    },
  ];

  async run() {
    const { args, flags } = this.parse(Create);
    const type = args.type;
    this.log(`Hello world from Generator extensions`);
    const env = yeoman.createEnv();

    try {
      env.register(
        require.resolve(`generator-azure-devops-extension/generators/${type}`),
        `azure-devops-extension:${type}`
      );
    
      // @ts-expect-error
      env.run(`azure-devops-extension:${type}`);
    } catch (error: any) {
      this.error(`The project could not be generated, something went wrong - code: ${error.code}`);
    }
  }
}
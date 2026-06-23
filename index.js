const { Command } = require("commander");
const generatePassword = require("./commands/password");
const gitStatus = require("./commands/git");
const createComponent = require("./commands/component");

const program = new Command();

program
  .name("devtool")
  .version("1.0.0");

program
  .command("password")
  .argument("<length>")
  .action((length) => {
    console.log(generatePassword(Number(length)));
  });

program
  .command("git-status")
  .description("Show git status")
  .action(() => {
    gitStatus();
  });

  program
  .command("component")
  .argument("<name>")
  .action((name) => {
    createComponent(name);
  })

program.parse();
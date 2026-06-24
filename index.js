const { Command } = require("commander");
const generatePassword = require("./commands/password");
const gitStatus = require("./commands/git");
const createComponent = require("./commands/component");
const createApi = require("./commands/api");
const generateRoute = require("./commands/route");
const createEnv = require("./commands/env");
const gitCommit = require("./commands/commit");
const repoInfo = require("./commands/repoInfo");
const createReadme = require("./commands/readme");

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

  program
 .command("api")
 .argument("<name>")
 .action((name)=>{
   createApi(name);
  });

  program
  .command("route")
  .description("Generate CRUD routes")
  .argument("<name>")
  .action((name) => {
    generateRoute(name);
  });


// ENV GENERATOR
program
  .command("env")
  .description("Generate .env file")
  .action(() => {
    createEnv();
  });


// GIT COMMIT
program
  .command("commit")
  .description("Git add, commit and push")
  .argument("<message>")
  .action((message) => {
    gitCommit(message);
  });


// REPOSITORY INFO
program
  .command("repo-info")
  .description("Show repository information")
  .action(() => {
    repoInfo();
  });


// README GENERATOR
program
  .command("readme")
  .description("Generate README file")
  .action(() => {
    createReadme();
  });


program.parse();
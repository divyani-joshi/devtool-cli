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
const organizeFiles = require("./commands/organize");
const removeEmptyFolders = require("./commands/clean");

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

  program
  .command("env")
  .description("Generate .env file")
  .action(() => {
    createEnv();
  });

  program
  .command("commit")
  .description("Git add, commit and push")
  .argument("<message>")
  .action((message) => {
    gitCommit(message);
  });

  program
  .command("repo-info")
  .description("Show repository information")
  .action(() => {
    repoInfo();
  });

  program
  .command("readme")
  .description("Generate README file")
  .action(() => {
    createReadme();
  });

  program
  .command("organize")
  .description("Organize files by type")
  .argument("<folderPath>")
  .action((folderPath) => {
    organizeFiles(folderPath);
    });

  program
  .command("clean")
  .description("Delete empty folders")
  .action(() => {
    removeEmptyFolders();
    });


program.parse();
const { execSync } = require("child_process");

function gitStatus() {
  const result = execSync("git status", {
    encoding: "utf-8",
  });

  console.log(result);
}

module.exports = gitStatus;
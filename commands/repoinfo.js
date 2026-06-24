const { execSync } = require("child_process");

function repoInfo(){

const branch = execSync(
"git branch --show-current",
{encoding:"utf8"}
);

const commits = execSync(
"git rev-list --count HEAD",
{encoding:"utf8"}
);

console.log("Branch:",branch);
console.log("Commits:",commits);
}

module.exports = repoInfo;
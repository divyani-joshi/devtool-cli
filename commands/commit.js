const { execSync } = require("child_process");

function commit(message){

execSync("git add .");

execSync(
`git commit -m "${message}"`,
{stdio:"inherit"}
);

execSync("git push",{stdio:"inherit"});
}

module.exports = commit;
const fs = require("fs");

function createEnv(){

const env = `
PORT=8000
MONGODB_URI=
JWT_SECRET=
`;

fs.writeFileSync(".env",env);

console.log(".env created");
}

module.exports = createEnv;
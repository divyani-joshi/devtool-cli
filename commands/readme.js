const fs = require("fs");

function createReadme(){

const content = `
# Project Name

## Features

- Feature 1
- Feature 2

## Installation

npm install

## Usage

npm start
`;

fs.writeFileSync("README.md",content);

console.log("README generated");
}

module.exports = createReadme;
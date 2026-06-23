const fs = require("fs");

function createComponent(name) {
  const content = `
import React from "react";

function ${name}() {
  return (
    <div>${name}</div>
  );
}

export default ${name};
`;

  fs.writeFileSync(`${name}.jsx`, content);

  console.log(`${name}.jsx created`);
}

module.exports = createComponent;
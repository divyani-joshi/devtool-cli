const fs = require("fs");
const path = require("path");

function createApi(moduleName) {

    const folder = path.join(process.cwd(), moduleName);

    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder);
    }

    fs.writeFileSync(
        path.join(folder,"controller.js"),
        `exports.get${moduleName}=()=>{}`
    );

    fs.writeFileSync(
        path.join(folder,"service.js"),
        `module.exports = {};`
    );

    fs.writeFileSync(
        path.join(folder,"route.js"),
`
const express = require("express");
const router = express.Router();

module.exports = router;
`
    );

    fs.writeFileSync(
        path.join(folder,"model.js"),
        `module.exports = {};`
    );

    console.log(`${moduleName} module created`);
}

module.exports = createApi;
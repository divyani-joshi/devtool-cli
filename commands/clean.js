const fs = require("fs");
const path = require("path");

function removeEmptyFolders(dir = process.cwd()) {

    const items = fs.readdirSync(dir);

    items.forEach((item) => {

        const itemPath = path.join(dir, item);

        if (fs.statSync(itemPath).isDirectory()) {

            removeEmptyFolders(itemPath);

            const remaining = fs.readdirSync(itemPath);

            if (remaining.length === 0) {

                fs.rmdirSync(itemPath);

                console.log(`Deleted: ${itemPath}`);
            }
        }
    });
}

module.exports = removeEmptyFolders;
const fs = require("fs");
const path = require("path");

function organizeFiles(folderPath) {

    if (!fs.existsSync(folderPath)) {
        console.log("Folder not found");
        return;
    }

    const fileTypes = {
        Images: [".jpg", ".jpeg", ".png", ".gif", ".webp"],
        Documents: [".pdf", ".doc", ".docx", ".txt", ".xlsx"],
        Videos: [".mp4", ".mkv", ".avi", ".mov"],
        Archives: [".zip", ".rar", ".7z"],
        Audio: [".mp3", ".wav"],
    };

    const files = fs.readdirSync(folderPath);

    files.forEach((file) => {

        const filePath = path.join(folderPath, file);

        if (fs.statSync(filePath).isDirectory()) {
            return;
        }

        const ext = path.extname(file).toLowerCase();

        let category = "Others";

        for (const key in fileTypes) {
            if (fileTypes[key].includes(ext)) {
                category = key;
                break;
            }
        }

        const categoryFolder = path.join(folderPath, category);

        if (!fs.existsSync(categoryFolder)) {
            fs.mkdirSync(categoryFolder);
        }

        const destination = path.join(categoryFolder, file);

        fs.renameSync(filePath, destination);

        console.log(`${file} -> ${category}`);
    });

    console.log("Files organized successfully");
}

module.exports = organizeFiles;
const fs = require("fs/promises");
const path = require("path");


const copyDir = async (fromPath, toPath) => {
    await fs.rm(path.resolve(__dirname, 'files-copy'), { recursive: true, force: true });
    await fs.mkdir(path.resolve(__dirname, 'files-copy'), { recursive: true });
    try {
        let files = await fs.readdir(path.resolve(__dirname, 'files'))
        files.forEach( e => {
            const from = path.resolve(__dirname, 'files', e)
            const to = path.resolve(__dirname, 'files-copy', e)
            fs.copyFile(from, to)
        })
    } catch (error) {
        console.log(error.message);
    }
}

copyDir()
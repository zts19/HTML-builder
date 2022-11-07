const path = require('path');
const fsP = require('fs/promises');
const fs = require('fs')

const mergeStyles = async () => {
    try {
        const forWrite = fs.createWriteStream(path.resolve(__dirname, 'project-dist', 'bundle.css'));
        const files = await fsP.readdir(path.resolve(__dirname, 'styles'), {withFileTypes: true});
        files.forEach(e => {
            if (path.extname(e.name) === '.css' && e.isFile()) {
                const forRead = fs.createReadStream(path.resolve(__dirname, 'styles', e.name), {encoding: 'utf-8'});

                forRead.pipe(forWrite);

                forRead.on('error', (error) => {
                    console.log(error.message);
                });
            }
        })
            

    } catch (error) {
        console.log(error.message);
    }
};

mergeStyles();
const fs = require('fs')
const path = require('path')


fs.readdir(path.resolve(__dirname, 'secret-folder'), (err, data) => {
    if (err) throw new Error(err)
    data.forEach(e => {
        let info = path.parse(e)
        let filePath = path.resolve(__dirname, 'secret-folder', e)
        fs.stat(filePath, (n, file) => {
            if(file.isFile()){
                console.log(`${info.name} --- ${info.ext.slice(1)} --- ${file.size/1024}kb`);
            }
        })
    })
    
})
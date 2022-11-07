const fs = require("fs");
const path = require("path");
const { stdout, stdin } = require("process");
const { text } = require("stream/consumers");

const toWrite = fs.createWriteStream(path.resolve(__dirname,'file.txt'))

stdout.write('Hello! Write your string. If you want to exit, type "exit" or press ctrl+C\n\n\n')

stdin.on('data', (data) => {
    if(data.toString().toLowerCase().trim() === 'exit') {
        process.exit()
    }
    toWrite.write(data)
})

process.on('exit', () => {
    stdout.write('\nProcess Is Finished!\nGOOD BYE!!!\n')
})
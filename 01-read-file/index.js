const path = require('path')
const fs = require('fs')
const { stdout} = require('node:process')

let text = fs.createReadStream(path.resolve(__dirname, 'text.txt'))

text.on('data', (chunk) => {
    stdout.write(chunk.toString());
})

text.on('error', (error) => {
    stdout.write(error);
})
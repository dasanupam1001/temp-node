// PATH module

const path = require('path')

console.log(path.sep)  // file seperator: \ or /

const filePath = path.join('content','subfolder','test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt') // to return the absolute path to file
console.log(absolute)
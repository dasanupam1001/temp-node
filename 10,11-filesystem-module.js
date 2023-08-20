// FileSystem module (lesson 10 & 11)


/* =======  Synchronous approach  ======= */

const { log } = require('console')
const { readFileSync, writeFileSync } = require('fs')


/* -------  readFileSync  ------- */

const first = readFileSync('./content/first.txt','utf8') // readFileSync(filepath, encoding)
console.log(first)

const second = readFileSync('./content/second.txt', 'utf-8')
console.log(second)


/* -------  writeFileSync  ------- */

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}\n${second}`) // writeFileSync(filepath, value) // if the file is not there, a new file will be created, o/w the content of the existing file will be overwritten

writeFileSync('./content/result-sync.txt', '\nHello World!', {flag: 'a'}) // the last parameter is a object. Here 'a' for append the values to the existing value in the file


/* ============================================= */


/* =======  Asynchronous approach  ======= */

// we need to add a callback function

const { readFile, writeFile } = require('fs')


let asyncFirst;
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return;
  }
  // asyncFirst = result  
  // console.log(asyncFirst)
  // console.log(typeof result)
  const first = result
  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    // console.log(second)
    writeFile('./content/result-async.txt', `Here is the async result:\n${first}\n${second}`, (err, result) => {
      if (err) {
        console.log(err)
        return
      }
      console.log(result)
    })
  })
})
// console.log(asyncFirst) // this will show undefined bcz as that was an async function this line of code will run before the readFile function as it is an async function
console.log('Hello')


// So essentially javascript offload the async function and start the next task rightaway and after it is all done it will do the async task


/* ============================================= */
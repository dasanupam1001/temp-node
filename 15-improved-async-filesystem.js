/* improved asynchronous filesystem (instead of using nested callbacks) */


const { readFile, writeFile } = require('fs').promises // instead of importing util and then doing util.promisify, we can derectly call require('fs').promises

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)



const start = async() => {
  // always place async await functions in try catch block
  try {
    // const first = await readFilePromise('./content/first.txt', 'utf-8')
    const first = await readFile('./content/first.txt', 'utf-8')
    // const second = await readFilePromise('./content/second.txt', 'utf-8')
    const second = await readFile('./content/second.txt', 'utf-8')
    // await writeFilePromise('./content/result-improved-async.txt', `Here is the improved async file:\n${first}\n${second}`)
    await writeFile('./content/result-improved-async.txt', `Here is the improved async file:\n${first}\n${second}`)

    console.log(first + '\n' + second)
  } catch (error) {
    console.log(error)
  }
} 

start()

/*
// slight improvement on async readFile : instead of using nested for loops we are using a bit cleaner approach
// Promise makes the particular program wait until all the programs run
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path,'utf8', (err, data) => {
      if(err){
        reject(err)
        return
      } else {
        resolve(data)
      }
    })
  })
}
getText('./content/first.txt')
  .then(result => console.log(result))
  .catch(err => console.log(err))
*/

// OS modules
const os = require('os') // no ./ bcz we are looking for built-in modules

// info about current user
const user = os.userInfo()
console.log(user)

// methods returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}
console.log(currentOs)
// console.log('Hello World');
const names = require('./4-names.js') // to import names from the file
console.log(names)
const sayHi = require('./5-utils.js')

sayHi('Sita')
sayHi(names.john)
sayHi(names.ram)


const data = require('./6-alternative-flavors.js')
console.log(data)

require('./7-mind-granade.js') // we can import without even using module.export(in other words when you import, you do invoke it) and also we dont require a variable to store it
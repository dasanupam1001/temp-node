const _ = require('lodash')

const items = [1, [2, [3, [4, 5], 6]]]
const newItems = _.flattenDeep(items) // to get a single array from the nested array
console.log(newItems)
console.log('hello world!')
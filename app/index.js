const calc = require('./calc')
const _ = require('lodash')

_.assign({'a': 1}, {'b': 2}, {'c': 3});

const numbersToAdd = [3, 4, 10, 2]

const result = calc.sum(numbersToAdd)
console.log(`El resultado es ${result}`)

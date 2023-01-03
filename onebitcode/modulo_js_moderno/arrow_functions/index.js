function normalSum(a, b) {
 return a + b
}

console.log(`Soma normal: ${normalSum(2, 2)}`)

const anonymousSum = function (a, b) {
  return a + b
}

console.log(`Soma anônima: ${anonymousSum(2, 2)}`)

const arrowSum = (a, b) => {
  return a + b
}

console.log(`Soma arrow function: ${arrowSum(2, 2)}`)

const subtract = (a, b) => a - b

console.log(`Subtração: ${subtract(5, 2)}`)

const double = n => `O dobro de ${n} é ${n * 2}`

console.log(double(2))

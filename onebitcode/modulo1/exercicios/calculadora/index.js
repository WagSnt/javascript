let entrada1 = prompt('Digite um número:')
let entrada2 = prompt('Digite outro número:')

let n1 = parseFloat(entrada1)
let n2 = parseFloat(entrada2)

let soma = n1 + n2
let menos = n1 - n2
let multi = n1 * n2
let divisao = n1 / n2

alert(
  '\nSoma = ' + soma +
  '\nSubtração = ' + menos +
  '\nMultiplicação = ' + multi +
  '\nDivisão = ' + divisao
)
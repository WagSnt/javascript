let primeiroNome = prompt('Digite seu primeiro nome:')
let sobrenome = prompt('Digite seu sobrenome:')
nome = primeiroNome + ' ' + sobrenome

let estudo = prompt('Qual a sua área de estudo?')

let anoNasc = prompt('Em que ano você nasceu?')
let idade = 2022 - anoNasc

alert(
  'Recruta cadastrado com sucesso!' +
  '\nNome Completo: ' + primeiroNome + ' ' + sobrenome +
  '\nCampo de Estudo: ' + estudo +
  '\nIdade: ' + idade
)
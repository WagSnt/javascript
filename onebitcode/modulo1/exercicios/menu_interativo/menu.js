let choice = prompt('Quem será o campeão da Copa do Mundo?' +
'\n1 - Brasil' +
'\n2 - Argentina' +
'\n3 - França' +
'\n4 - Alemanha' +
'\n5 - Encerrar'
)

do {
  alert('A opção escolhida foi: ' + choice)
  choice = prompt('Quem será o campeão da Copa do Mundo?' +
'\n1 - Brasil' +
'\n2 - Argentina' +
'\n3 - França' +
'\n4 - Alemanha' +
'\n5 - Encerrar'
)
} while (choice != 5)

alert('O programa está sendo encerrrado...')

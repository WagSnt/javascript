let moneyAvailable = prompt('Qual a quantidade inicial de dinheiro disponível?')

moneyAvailable = parseFloat(moneyAvailable)

do {
  alert('Dinheiro disponível: R$' + moneyAvailable)
  addRemoveOrLeave = prompt('O que você deseja fazer?' +
  '\n1 - Adicionar dinheiro' +
  '\n2 - remover dinheiro' +
  '\n3 - Sair'
  )

  switch (addRemoveOrLeave) {
    case '1':
      moneyAvailable += parseFloat(prompt('Qual valor você deseja adicionar?'))
      break
    case '2':
      moneyAvailable -= parseFloat(prompt('Qual valor você deseja remover?'))
      break
    case '3':
      alert('Saindo...')
      break
      default:
        alert('ERRO! Por favor, escolha uma opção válida.')
  }
} while (addRemoveOrLeave !== 3)

alert('Programa finalizado!')
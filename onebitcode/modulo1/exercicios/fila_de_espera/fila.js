let waitingList = ['Stephanie', 'Otávio', 'Amanda', 'Berenice', 'Claudio', 'Vanessa']
options = ''
do {
  let options = prompt ('Lista de espera:' +
  '\n1º - ' + waitingList[0] +
  '\n2º - ' + waitingList[1] +
  '\n3º - ' + waitingList[2] +
  '\n4º - ' + waitingList[3] +
  '\n5º - ' + waitingList[4] +
  '\n6º - ' + waitingList[5] +
  '\n7º - ' + waitingList[6] +
  '\n8º - ' + waitingList[7] +
  '\n9º - ' + waitingList[8] +
  '\n10º - ' + waitingList[9] +
  '\n\nEscolha uma opção:' +
  '\n1 - Novo paciente' +
  '\n2 - Consultar paciente' +
  '\n3 - Sair'
  ) 

  switch (options) {
    case '1':
      waitingList.push(prompt('Qual o nome do paciente?'))
      break
    case '2':
      let consulted =waitingList.shift()
      alert('Paciente em consulta: ' + consulted)
      break
    case '3':
      alert('Finalizando sistema do Hospital Wag...')
      break
    default:
      alert('ERRO! Por favor, escolha uma opção válida.')
  }
} while(options !== 3)

alert('Programa finalizado!')
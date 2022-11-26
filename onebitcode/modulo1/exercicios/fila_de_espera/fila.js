let waitingList = []
let options = ''


do {
  let patient = ''
  for (let i = 0; i < waitingList.length; i++) {
    patient += (i + 1) + 'º - ' + waitingList[i] + '\n'
  }

  options = prompt ('Lista de espera:\n' +
  patient +
  '\n\nEscolha uma opção:' +
  '\n1 - Novo paciente' +
  '\n2 - Consultar paciente' +
  '\n3 - Sair'
  ) 

  switch (options) {
    case '1':
      let newPatient = (prompt('Qual o nome do paciente?'))
      waitingList.push(newPatient)
      break
    case '2':
      if (waitingList.length > 0) {
        let consulted = waitingList.shift()
        alert('Paciente em consulta: ' + consulted)
      } else {
        alert('Não há pacientes na fila de espera')
      }
      break
    case '3':
      alert('Finalizando sistema do Hospital Wag...')
      break
    default:
      alert('ERRO! Por favor, escolha uma opção válida.')
  }
} while(options !== '3')

alert('Programa finalizado!')
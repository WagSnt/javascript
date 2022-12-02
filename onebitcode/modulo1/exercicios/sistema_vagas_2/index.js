let jobs = []

execute()

function menu() { //Menu
  options = prompt(
    'Escolha uma opção abaixo:\n' +
    '\n1 - Listar vagas disponíveis' +
    '\n2 - Criar uma nova vaga' +
    '\n3 - Visualizar uma vaga' +
    '\n4 - Inscrever um candidato em uma vaga' +
    '\n5 - Excluir uma vaga' +
    '\n6 - Sair'
  )
  return options
}

function jobOpeningsAvailable() { // Listar todas as vagas
  const jobsInText = jobs.reduce(function (finalText, job, index){
    finalText += index + '. '
    finalText += job.nome + ' ('
    finalText += job.candidates.length + ' candidatos)'
    return finalText
  }, '')

  alert(jobsInText)
}

function newJobVacancy() { // Adicionar uma nova vaga
  const nome = prompt('Digite o nome da vaga:')
  const descricao = prompt('Descrição da vaga:')
  const deadline = prompt('Qual é a data limite para candidatura da vaga?')

  const confirmation = confirm(
    'Tem certeza que deseja registrar essa vaga?' +
    '\nVaga: ' + nome + '\nDescrição: ' + descricao + '\nData limite: ' + deadline
  )

  if (confirmation) {
    const newJob = {
      nome: nome,
      descricao: descricao,
      data: deadline,
      candidatos: []
    }

    jobs.push(newJob)
    alert('Vaga registrada com sucesso!')
  } else {
    alert('Retornando ao menu...')
  }
}

function viewJobVacancy() { // Visualizar uma vaga
  const index = prompt('Digite o índice da vaga que deseja visualizar:')
  const job = jobs[index]
  
  const candidatesInText = job.reduce(function(finalText, candidates){
    finalText += index + '. ' + job + '\nQuantidade de candidatos: ' + candidates.length + '\nCandidatos: ' + candidates

    return finalText
    
  }, '')

  alert(jobInText)
}

function newCandidate() { // Inscrever um candidato em uma vaga
  const candidateName = prompt('Informe o nome do candidato:')
  const index = prompt('Informe o índice da vaga que deseja adicionar o candidato:')

  const confirmation = confirm(
    'Deseja cadastrar o candidato ' + candidateName + ' nesta vaga?'
  )
  
  if (confirmation) {
    jobs.candidates[index].push(candidateName)
  } else {
    alert('Cadastro de candidato cancelado. Retornando ao menu...')
  }
}

function deleteJobVacancy() { // Excluir uma vaga
  const index = prompt('Informe o índice da vaga que deseja excluir:')

  const confirmation = confirm(
    'Tem certeja que deseja excluir essa vaga?\n' + jobs[index])
  
  if (confirmation) {
    jobs[index].pop()
  } else {
    alert('Retornando ao menu anterior...')
  }
}

function execute(){
  let options = ''
  do {
    options = menu()

    switch (options) {
      case '1':
        jobOpeningsAvailable()
        break
      case '2':
        newJobVacancy()
        break
      case '3':
        viewJobVacancy()
        break
      case '4':
        newCandidate()
        break
      case '5':
        deleteJobVacancy()
        break
      case '6':
        alert('Finalizando programa...')
      default:
        alert('ERRO! Por favor, digite uma opção válida.')
    }
  } while (options !== '6')
}
alert('Sistema finalizado.')


let jobs =  []

execute()

function listJobsOpenings () { // Lista de vagas
  const jobOpeningsInText = jobs.reduce(function (finalText, job, index){
    //1. nome, (x candidatos)
    finalText += index + '. '
    finalText += job.nome
    finalText += ' (' + job.candidates.length + ' candidatos)\n'
    return finalText
  }, '')

  alert(jobOpeningsInText)
}

function newJobVacancy () { // Cadastrar nova vaga
  const name = prompt('Informe um nome para a vaga:')
  const description = prompt('Informe a descrição da vaga:')
  const deadline = prompt('Informe a data limite (dd/mm/aaaa) para canditatura da vaga:')

  const confirmation = confirm(
    'Deseja criar uma nova vaga com essas informações?\n' +
    'Nome: ' + name + '\nDescrição: ' + description + '\nData Limite: ' + deadline
  )

  if (confirmation) { // registrando nova vaga
    const newJob = {
      nome: name, 
      descricao: description, 
      data: deadline, 
      candidates: []
    }
    jobs.push(newJob)
    alert('Vaga registrada com sucesso!')
  }
  }
  

function viewJobVacancy (){ //Exibir vaga
  const index = prompt('Informe o índice da vaga que deseja exibir:')
  const job = jobs[index]

  const candidatesInText = job.candidates.reduce(function(finalText, candidate){
    return finalText + '\n -' + candidate
  }, '')

  alert(
    'Vaga nº' + index +
    '\nNome: ' + job.nome +
    '\nDescrição: ' + job.descricao +
    '\nData Limite: ' + job.deadline +
    '\nQuantidade de Candidatos: ' + job.candidates.length + 
    '\nCandidatos inscritos: ' + candidatesInText
    )
}

function enrollCandidate (){ // Cadastrar candidato
  let candidateName = prompt('Nome do candidato:')
  let index = prompt('Índice da vaga:')
  const job = jobs[index]

  const confirmation = confirm(
    'Desja inscrever o candidato ' + candidateName + ' na vaga ' + index + '?\n' +
    'Nome: ' + job.nome + '\nDescrição: ' + job.descricao + '\nData Limite: ' + job.data
    )

  if (confirmation) {
    job.candidates.push(candidateName)
    alert('Inscrição do candidato realizada com sucesso!')
  }
}

function deleteJobVacancy (){ // Deletar vaga
  const index = prompt('Informe o índice da vaga que deseja excluir:')
  const job = jobs[index]

  const confirmation = confirm(
    'Tem certeza que desja excluir a vaga ' + index + '?\n' +
    'Nome: ' + job.nome + '\nDescrição: ' + job.descricao + '\nData Limite: ' + job.date
  )

  if(confirmation) {
    jobs.splice(index, 1)
    alert('Vaga excluída com suceesso!')
  }
}

function menu() { // Menu interativo
  let options = prompt(
      'JOB4YOU' +
      '\n\nMenu Inicial:' +
      '\n1 - Listar vagas disponíveis' +
      '\n2 - Criar uma nova vaga' +
      '\n3 - Visualizar uma vaga' +
      '\n4 - Inscrever um candidato em uma vaga' +
      '\n5 - Excluir uma vaga' +
      '\n6 - Sair'
    )

    return options
}

function execute() {
  let option = ''

  do {
    option = menu()

    switch(option) {
      case '1':
        if (jobs.length <= 0) {
          alert('Nenhuma vaga disponível.')
        } else {
          listJobsOpenings()
        }
        
        break
      case '2':
        newJobVacancy()
        break
      case '3':
        viewJobVacancy()
        break
      case '4':
        enrollCandidate()
        break
      case '5':
        deleteJobVacancy()
        break
      case '6':
        alert('Finalizando sistema...')
        break
      default:
        alert('ERRO! Por favor, digite uma opção válida.')
        break
    }
  } while (option !== '6')
}

alert('Sistema finalizado!')

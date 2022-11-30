let jobs =  []


function menu() {
  let options = ''
  do {
    options = prompt(
      'JOB4YOU' +
      '\n\nMenu Inicial:' +
      '\n1 - Listar vagas disponíveis' +
      '\n2 - Criar uma nova vaga' +
      '\n3 - Visualizar uma vaga' +
      '\n4 - Inscrever um candidato em uma vaga' +
      '\n5 - Excluir uma vaga' +
      '\n6 - Sair'
    )
  } while (options !== '6')
}

function listJobsOpenings () {
  return alert('Vagas de emprego disponíveis:' +
  '\n' + jobs)
}

function newJobVacancy () {
  let jobOpportunity = {
    job: prompt('Digite o nome da vaga:'),
    descriptionJob: prompt('Digite a descrição da vaga:'),
    deadline: (prompt('Digite o data limite da vaga: dia/mês/ano'))
  }

  let confirmation = confirm(
    'Informações da vaga:' +
    '\n' + this.job +
    '\n' + this.descriptionJob +
    '\n' + this.deadline +
    '\n\nConfirmar o cadastro da nova vaga de emprego?'
  )

  if(confirmation === True) {
    jobs.push(jobOpportunity)
  } else {
    alert('Cadastro cancelado! Retornando ao menu anterior...')
  }
}

function viewJobVacancy (){}

function enrollCandidate (){}

function deleteJobVacancy (){}

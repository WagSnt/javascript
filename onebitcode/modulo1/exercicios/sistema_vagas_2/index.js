let jobs = []

function menu() { //Menu
  const options = prompt(
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
    finalText += job + ' ('
    finalText += job.candidates.length + ' candidatos)'

    return finalText
  }, '')
  alert(jobsInText)
}

function newJobVacancy() {
  let jobOpportunity = {nome, descricao, deadline, candidates: []}
}
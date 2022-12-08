// Criando um gerador de label
function createLabel(text, htmlFor) {
  const label = document.createElement('label')
  label.htmlFor = htmlFor
  label.innerText = text
  return label
}

// criando um gerador de input
function createInput(id, value, name, type = 'text', placeholder = '') {
  const input = document.createElement('input')
  input.id = id
  input.value = value
  input.name = name
  input.type = type
  input.placeholder = placeholder
  return input
}

// Configurando evento do botão 'add tecnologia'
const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('fillingForm')
const developers = [] // Array para salvar os desenvolvedores
let inputRows = 0 // Contador para criação de id das linhas de tecnologias adicionadas

addTechBtn.addEventListener('click', function(ev) {

  const ul = document.getElementById('technologies')

  const newRow = document.createElement('li')
  const rowIndex = inputRows // Puxando o contador de id
  inputRows++ // aidionando valor ao contador
  newRow.id = 'inputRow-' + rowIndex // criando o id
  newRow.className = 'inputRow' //  classe para puxar os dados de todas as linhas

  // Criando label e input com as functions parametrizadas anteriormente
  const techNameLabel = createLabel('Nome da Tecnologia: ', 'techName-' + rowIndex)
  const techNameInput = createInput('techName-' + rowIndex, '', 'techName')

  // Criando marcadores de tempo de exp da tecnologia
  const expLabel = createLabel('Tempo de Experiência: ', 'expLabel')

  const id1 = 'expRadio-' + rowIndex + '.1'
  const expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
  const expLabel1 = createLabel('0-2 anos', id1)

  const id2 = 'expRadio-' + rowIndex + '.2'
  const expRadio2 = createInput(id2, '2-5 anos', 'techExp-' + rowIndex, 'radio')
  const expLabel2 = createLabel('3-4 anos', id2)
  
  const id3 = 'expRadio-' + rowIndex + '.3'
  const expRadio3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio')
  const expLabel3 = createLabel('5+ anos', id3)

  // Criando botão de remoção
  const removeRowBtn = document.createElement('button')
  removeRowBtn.type = 'button'
  removeRowBtn.innerText = 'Remover'
  removeRowBtn.addEventListener('click', function(){
    ul.removeChild(newRow)
  })

  //Adicionando os elementos ao nó
  newRow.append(
    techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn
    )
  ul.appendChild(newRow)
})

// Adicionando evento ao Formulário
form.addEventListener('submit', function(ev) {
  ev.preventDefault()

  const fullnameInput = document.getElementById('fullname')
  const inputRows = document.querySelectorAll('.inputRow')

  let tech = []
  inputRows.forEach(function (row) {
    // #rowId input[name="techName"]
    const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
    const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
    tech.push({name: techName, exp: techExp})
  })

  const newDev = {fullname: fullnameInput.value, tech: tech}
  developers.push(newDev)
  alert('Dev cadastrado com sucesso!')

  fullnameInput.value = '' // Limpando campo
  inputRows.forEach(function (row) {
    row.remove()
  })
  console.log(developers)
})
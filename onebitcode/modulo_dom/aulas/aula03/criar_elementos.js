function addInput() {
  // nó onde estará o elemento
  const ul = document.getElementById('inputs')
  
  // criar elemento
  const newLi = document.createElement('li')
  // Dando atributos ao elemento 'li' criado:
  newLi.className = 'list-item'
  newLi.innerText = 'Novo Input: '

  // Criando um input
  const newInput = document.createElement('input')
  newInput.type = 'text'
  newInput.name = 'input'

  // colocando o newInput dentro da li e o li dentro da ul
  newLi.appendChild(newInput)
  ul.appendChild(newLi)
}
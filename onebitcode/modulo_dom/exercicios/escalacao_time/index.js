function addPlayer () {
  const lineupSection = document.getElementById('lineup')

  const h3 = document.createElement('h3')
  h3.type = 'text'
  h3.innerText = 'Jogador'

  const ul = document.createElement('ul')

  const positionLi = document.createElement('li')
  positionLi.innerText = 'Posição: '
  const positionInput = document.createElement('input')
  positionInput.type = 'text'
  positionInput.name = 'playerposition'
  positionLi.appendChild(positionInput)
  ul.appendChild(positionLi)

  const nameLi = document.createElement('li')
  nameLi.innerText = 'Nome do jogador: '
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'palyername'
  nameLi.appendChild(nameInput)
  ul.appendChild(nameLi)

  const numberLi = document.createElement('li')
  numberLi.innerText = 'Número da camisa: '
  const numberInput = document.createElement('input')
  numberInput.type = 'number'
  numberInput.name = 'shirtnumber'
  numberLi.append(numberInput)
  ul.appendChild(numberLi)

  lineupSection.append(h3, ul)
}

function removePlayer() {
  const lineupSection = document.getElementById('lineup')
  const h3 = document.createElement('h3')
  h3.type = 'text'
  h3.innerText = 'Remover jogador'

  const ul = document.createElement('ul')

  const numberLi = document.createElement('li')
  numberLi.innerText = 'Digite o número do jogador que deseja remover: '
  const numberInput = document.createElement('input')
  numberInput.type = 'text'
  numberInput.name = 'removeplayer'
  const buttonRemove = document.createElement('button')
  buttonRemove.innerText = 'Remover'
  numberLi.append(numberInput, buttonRemove)
  ul.appendChild(numberLi)
  lineupSection.append(h3, ul)
}
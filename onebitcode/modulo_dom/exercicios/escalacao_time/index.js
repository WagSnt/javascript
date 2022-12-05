function addPlayer() {
  const position = document.getElementById('playerposition').value
  const name = document.getElementById('playername').value
  const number = document.getElementById('playernumber').value

  const confirmation = confirm(
    'Tem certeza que deseja escalar este jogador?\n' +
    position + ' - ' + name + ': Nº ' + number
    )

  if (confirmation) {
    const lineupSection = document.getElementById('lineup')
  const player = document.createElement('li')
  player.id = 'player-' + number
  player.innerText = position + ' - ' + name + ': Nº ' + number
  lineupSection.appendChild(player)

  document.getElementById('playerposition').value = ''
  document.getElementById('playername').value = ''
  document.getElementById('playernumber').value = ''
  } else {
    alert('Escalação de jogador cancelada...')
    document.getElementById('playerposition').value = ''
    document.getElementById('playername').value = ''
    document.getElementById('playernumber').value = ''
  }
}

function removePlayer() {
  const number = document.getElementById('remove-number').value
  const playerNumber = document.getElementById('player-' + number)

  const confirmation = confirm('Tem certeza que deseja remover este jogador?\n' + playerNumber.innerText)

  if (confirmation) {
    playerNumber.remove()
  } else {
    alert('Remoção cancelada...')
    document.getElementById('remove-number').value = ''
  }
}
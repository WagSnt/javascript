const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const addPlayersBtn = document.querySelector('button')
const roundNumber = 1
const playerRound = document.getElementById('playerRound')

//Guardando nome dos players
addPlayersBtn.addEventListener('click', function() {
  document.getElementById('namePlayer1')
  namePlayer1.innerText += ' ' + player1.value  + ' X'
  namePlayer1.dataset.player1 = player1.value
  namePlayer2.innerText += ' ' + player2.value + ' O'
  namePlayer2.dataset.player2 = player2.value

  if (roundNumber % 2 !== 0) {
    alert('Rodada do jogador: ' + player1.value)
    playerRound += 1
  }else {
    alert('Rodada do jogador: ' + player2.value)
  }
})

const blocks = document.querySelectorAll('.block').forEach(function(blockBtn) {
  blockBtn.addEventListener('click', function() {
    if (roundNumber % 2 !== 0) {
      blockBtn.innerText = 'X'
      blockBtn.dataset.mark = 'X'
    } else {
      blockBtn.innerText = 'O'
      blockBtn.dataset.mark = 'O'
    }
  })
})



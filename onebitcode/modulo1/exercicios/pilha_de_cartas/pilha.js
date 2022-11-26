let baralho = ['Ás de paus', '3 de copas', '5 de ouro', 'Coringa']

options = ''

do {
  options = prompt('Cartas disponíveis:' +
  '\n 1 - ' + baralho[0] +
  '\n 2 - ' + baralho[1] +
  '\n 3 - ' + baralho[2] +
  '\n 4 - ' + baralho[3] +
  '\n 5 - ' + baralho[4] +
  '\n 5 - ' + baralho[5] +
  '\n 5 - ' + baralho[6] +
  '\n\nEscolha uma opção: ' +
  '\n 1 - Adicionar uma carta' +
  '\n 2 - Puxar uma carta' +
  '\n 3 - Sair'
  )

  switch (options) {
    case '1':
      baralho.unshift(prompt('Qual o nome da carta que deseja adicionar?'))
      break
    case '2':
      let cartaPuxada = baralho.shift()
      alert(cartaPuxada)
      break
    case '3':
      alert('Fianlizando programa')
      break
  }
} while (options !== '3')

alert('Programa finalizado')
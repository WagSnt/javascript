let baralho = []

options = ''

do {
  options = prompt('Cartas disponíveis: ' + baralho.length +
  '\n\nEscolha uma opção: ' +
  '\n 1 - Adicionar uma carta' +
  '\n 2 - Puxar uma carta' +
  '\n 3 - Sair'
  )

  switch (options) {
    case '1':
      let addPlayingCard = (prompt('Qual o nome da carta que deseja adicionar?'))
      baralho.unshift(addPlayingCard)
      break
    case '2':
      if (baralho.length > 0) {
        let cartaPuxada = baralho.shift()
        alert('Você retirou o ' + cartaPuxada + ' do baralho!')
      }else {
        alert('Não há nenhuma carta no baralho!')
      }
      break
    case '3':
      alert('Finalizando programa')
      break
    default:
      alert('ERRO! Por favor, digite uma opção válida')
  }
} while (options !== '3')

alert('Programa finalizado')
const vehicle1 = prompt('Qual o nome do 1º veículo?')
const velocity1 = prompt ('Em que velocidade em KM ele está?')

const vehicle2 = prompt('Qual o nome do 2º veículo?')
const velocity2 = prompt('Em que velocidade em KM ele está?')

if (velocity1 > velocity2) {
  alert(
    'O veículo ' + vehicle1 + ' está mais rápido!'
  )
} else if(velocity1 < velocity2) {
  alert(
    'O veículo ' + vehicle2 + ' está mais rápido!'
  )
} else {
  alert(
    'As velocidades de ' + vehicle1 + 'e ' + vehicle2 + ' são iguais!'
  )
}
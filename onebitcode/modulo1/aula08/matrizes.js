const arr = [
  '1º Nível',
  ['2º Nível', 42, true],
  [
    ['3º Nível, 1º Item', 'Olá, Mundo!'],
    ['3º Nível, 2º Item', 'Oi, Mundo!'],
  ]
]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[1][0])
console.log(arr[1][1])
console.log(arr[2][1])
console.log(arr[2][1][0])

const matriz = [
  ['l1, c1', 'l1, c2', 'l1, c3', 'l1, c4'],
  ['l2, c1', 'l2, c2', 'l2, c3', 'l2, c4'],
  ['l3, c1', 'l3, c2', 'l3, c3', 'l3, c4'],
]

console.table(matriz)

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const element = matriz[i][j]
    console.log('Posição: (' + i + ', ' + j + ') valor: ' + element)
  }
}
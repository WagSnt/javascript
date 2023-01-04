// Média Aritmética Simples
//Arrow Function com parâmetros dentro da (), (spread com uma variável)
const average = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0)
  return sum / numbers.length
}

console.log(`Média Aritmética Simples: ${average(3, 6, 10, 9)}`)


// Média Ponderada

const weightedAverage = (...entries) => {
  // ?? caso weight não seja informado, seu valor é 1 = entry.weight ?? 1
  const sum = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0)
// ?? caso weight não seja informado, seu valor é 1 = entry.weight ?? 1
  const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
  return sum / weightSum
}

console.log(`Média Ponderada: ${weightedAverage(
  {number: 9, weight: 3},
  {number: 7}, // sem weight para testar a coalescencia nula (??)
  {number: 10, weight: 1},
)}`)


// Mediana
const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b) //deixando em order crescente
  const middle = Math.floor(orderedNumbers.length / 2) //O floor.lenght vai pegar o o total de elementos do array, e assim, dividimos por 2 para pegar o meio do array
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle]
  }
  const firstMedian = orderedNumbers[middle - 1] //ele sempre vai pegar o meio maior do array, por isso é necessário puxar o anterior para o cálculo funcionar
  const secondMedian = orderedNumbers[middle]
  return average(firstMedian, secondMedian) //Somando ambos e obtendo a média de ambos
}

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)


//Moda

const mode = (...numbers) => {
  //[ [n, qtd], [n, qtd] ]
  const quantities = numbers.map(num => [
    num,
    numbers.filter(n => num === n).length
  ])
  quantities.sort((a, b) => b[1] - a[1])
  return quantities[0][0]
}

console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)
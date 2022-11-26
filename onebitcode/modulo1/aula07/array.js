const arr = ['Frodo', 'Sam', 'Merry', 'Pippin', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli']

console.log(arr)

// Adicionar Elementos
//push (adicionando no final)
let tamanho = arr.push('Boromir')
console.log(arr)
console.log(tamanho)

//unshift (coloca no começo)
tamanho = arr.unshift('teste')
console.log(arr)
console.log(tamanho)

//Remover Elementos
//pop (remove no final)
let lastElement = arr.pop()
console.log(arr)
console.log(lastElement)

// shift (remover no começo)
lastElement = arr.shift()
console.log(arr)
console.log(lastElement)

// Pesquisar por um Elemento
//Includes

const inclui = arr.includes('Gandalf')
console.log(inclui)

// indexOf
const indice = arr.indexOf('Gandalf')
console.log(indice)

// Cortar e Contatenar Arrays
//slice
const hobbits = arr.slice(0, 4)
const outros = arr.slice (-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

//concat
const sociedade = hobbits.concat(outros, 'Boromir')
console.log(sociedade)

// Substituição dos Elementos
//splice
const elementsRemoved = sociedade.splice(indice, 1, 'Gandalf, o Cinzento')
console.log(sociedade)
console.log(elementsRemoved)

// Iterar sobre os Elementos
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice]
  console.log(elemento +' se encontra na posição ' + indice)
}
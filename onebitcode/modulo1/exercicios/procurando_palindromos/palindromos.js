const word = prompt('Qual palavra você quer verificar se é um palíndromo?')
let invertedWord = ''

for (let i = word.length - 1; i >= 0; i--) {
  invertedWord += word[i] /* a cada for, ela vai adicionar em 'invertedWord' a última letra do 'word'até a primeira*/
}

if (word === invertedWord) {
  alert(word + ' = ' + invertedWord + ' - É um palíndromo')
} else {
  alert(word + ' != ' + invertedWord + ' - Não é um palíndromo')
}
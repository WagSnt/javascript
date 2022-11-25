let calculateNumber = prompt('Olá!!, meu nome é Rob Table, sou um robô de tabuadas!!' +
'\nEscolha um número para ver sua tabuada:'
)

calculateNumber = parseFloat(calculateNumber)

multiplicationTable = ''

for(let i = 1; i <= 20; i++) {
  multiplicationTable += ' => ' + calculateNumber + ' x ' + i + ' = ' + (calculateNumber * i) + '\n'
}

alert('Veja abaixo, a tabuada do ' + calculateNumber + ' do 1 ao 20:\n\n' + 
multiplicationTable)

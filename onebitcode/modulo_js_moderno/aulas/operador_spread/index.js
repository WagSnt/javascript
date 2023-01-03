const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0]) // console.log( P, r, o, n)


// clonar objetos iteráveis = referencia
const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({towns, townsCopy})


// clonando sem referencia
const townsClone = [...towns]

townsClone.push('Alderban')

console.log({towns, townsCopy, townsClone})

const townsObject = {...towns}
const townsObjectClone = {...townsObject}

townsObjectClone.test = 'Test'


console.log({townsObject, townsObjectClone})

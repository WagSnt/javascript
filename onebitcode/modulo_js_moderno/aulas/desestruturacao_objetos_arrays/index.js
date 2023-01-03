const request = {
  name: 'Wagner',
  food: 'Hamburguer',
  additional: ['Catchup', 'Mostarda']
}

const name = request.name

const {food, additional} = request

console.log(name, food, additional)

const [add0, add1] = additional

console.log(add0, add1)

function createUser({name, food, additional}) {
  const id = Math.floor(Math.random() * 9999)
  return {
    id,
    name,
    food,
    additional
  }
}

const wagner = createUser(request)

console.log(wagner)
const touristName = prompt ('Qual o nome do turista?')
const visitedCity = prompt ('Já visitou alguma cidade? Sim ou Não')

let allCities = ''
let anotherCity = ''
scoreCity = 0

while (visitedCity === 'Sim') {
   let cityName = prompt('Qual o nome da cidade visitada?')
   allCities += cityName + ', '
   scoreCity +=1
   anotherCity = prompt('Visitou alguma outra cidade?')
   if (anotherCity === 'Não'){
    break
   }
}

alert(
  'Nome do turista: ' + touristName +
  '\nQuantas cidades visitou: ' + scoreCity +
  '\nCidades visitadas: ' + allCities
)
const character1 = prompt('Qual o nome do personagem?')
const attackEntry = prompt('Quantos pontos de ataque ele possui?')

const character2 = prompt('Qual o nome do 2º personagem?')
let healthEntry = prompt('Quantos pontos de vida ele possui?')
const defenseEntry = prompt('Quantos pontos de defesa ele tem?')
const shield = confirm('Ele possui um escudo?')

const attackPower = parseFloat(attackEntry)
const defensePower = parseFloat(defenseEntry)
let healthPoints = parseFloat(healthEntry)

let damage = 0

if (attackPower > defensePower && shield === false){
  damage = attackPower - defensePower
} else if (attackPower > defensePower && shield === true) {
  damage = (attackPower - defensePower) / 2
} else {
  damage = 0
}

healthPoints -= damage

alert(character1 + ' Causou ' + damage + ' Pontos de dano em ' + character2)
alert(
  character1 + '\nPoder de ataque: ' + attackPower + '\n\n' +
  character2 + '\nPontos de vida: ' + healthPoints +
  '\nPoder de defesa: ' + defensePower + '\nPossui escudo: ' + shield
)
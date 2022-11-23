const character1 = prompt('Qual o nome do personagem?')
const attackEntry = prompt('Quantos pontos de ataque ele possui?')

const character2 = prompt('Qual o nome do 2º personagem?')
const healthEntry = prompt('Quantos pontos de vida ele possui?')
const defenseEntry = prompt('Quantos pontos de defesa ele tem?')
const shield = confirm('Ele possui um escudo?')

const attackPower = parseFloat(attackEntry)
const defensePower = parseFloat(defenseEntry)
const healthPoints = parseFloat(healthEntry)

if(attackPower > defensePower && shield === false){
  let damage = attackPower - defensePower
  alert('Dano causado: ' + damage)
  healthPoints -= damage
} else if(attackPower > defensePower && shield === true) {
  let damage = (attackPower - defensePower) / 2
  healthPoints -= damage
  alert ('Dano causado: ' + damage)
} else {
  let damage = 0
  healthPoints -= damage
  alert('Dano causado: ' + damage)
}

alert(
  'Dano causado: ' + damage +
  'Vida do defensor: ' + healthPoints
  
)
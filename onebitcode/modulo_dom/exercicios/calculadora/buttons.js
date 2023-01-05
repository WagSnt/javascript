import {calculate} from './calculate.js'
const input = document.getElementById('calculationArea')
const resultInput = document.getElementById('result')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "] //lista de caracteres permitidos para digitação

function buttonPress(ev) { // dando função para cada botão
  const value = ev.currentTarget.dataset.value // pegando o valor de cada botão
  input.value += value // adicionando ao input do calculo
}

//clear
function clearBtn() {
  input.value = ''
  input.focus() // colocando o cursor novamente no input, pronto para digitação
}

//teclado pressionado
function keydownBtn(ev) { //keydown (botão pressionado)
  ev.preventDefault() //evitando que seja inserido o valor da tecla pressionada
  if (allowedKeys.includes(ev.key)) {//a lista de permissão possui o valor da tecla pressionada pelo usuário?
    input.value += ev.key //inserindo o valor no input
    return
  } 
  if (ev.key === 'Backspace') { //configurando backspace
    input.value = input.value.slice(0, -1)
  }
  if (ev.key === 'Enter') { //configurando enter para mostrar o resultado do calculo
    calculate()
  }
}

//Copy
function copy(ev) {
  const button = ev.currentTarget //pegando quem acionou o evento
  if (button.innerText === 'Copy') { // pegando o texto 'copy', que indica que ainda não foi copiado
    button.innerText = 'Copied!'
    button.classList.add('success') // estilizando a borda e a fonte
    navigator.clipboard.writeText(resultInput.value) //copiando o resultado (navigator é disponibilizado através do window.navigator)
  } else {
    button.innerText = 'Copy'
    button.classList.remove('success')
  }
}

export {buttonPress, clearBtn, keydownBtn, copy}
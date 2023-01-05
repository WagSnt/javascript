import {calculate} from './calculate.js'
import {clearBtn, keydownBtn, copy} from './buttons.js'
import {theme} from './theme.js'

const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('calculationArea')
//configurando botões
document.querySelectorAll('.charKey').forEach(function(charKeyBtn) { //pegando a classe de botões
  charKeyBtn.addEventListener('click', function() { // dando função para cada botão
    const value = charKeyBtn.dataset.value // pegando o valor de cada botão
    input.value += value // adicionando ao input do calculo
  })
})

//configurando o clear
document.getElementById('clear').addEventListener('click', clearBtn)

//configurando teclado
input.addEventListener('keydown', keydownBtn)

//configurando o botão de igual // configurando o calculo
document.getElementById('equal').addEventListener('click', calculate)

//copiando resultado para a área de transferências
document.getElementById('copyButton').addEventListener('click', copy)

//trocando o tema da calculadora
document.getElementById('themeSwitcher').addEventListener('click', theme)
const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('calculationArea')
const resultInput = document.getElementById('result')

//Digitação na calculadora
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "] //lista de caracteres permitidos para digitação

//configurando teclas
document.querySelectorAll('.charKey').forEach(function(charKeyBtn) { //pegando a classe de botões
  charKeyBtn.addEventListener('click', function() { // dando função para cada botão
    const value = charKeyBtn.dataset.value // pegando o valor de cada botão
    input.value += value // adicionando ao input do calculo
  })
})

//configurando o clear
document.getElementById('clear').addEventListener('click', function() {
  input.value = ''
  input.focus() // colocando o cursor novamente no input, pronto para digitação
})

input.addEventListener('keydown', function(ev) { //keydown (botão pressionado)
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
})

//configurando o botão de igual
document.getElementById('equal').addEventListener('click', calculate)

// configurando o calculo
function calculate() {
  resultInput.value = 'ERROR'
  resultInput.classList.add('error')

  const result = eval(input.value)
  
  resultInput.value = result
  resultInput.classList.remove('error')
}

//copiando resultado para a área de transferências
document.getElementById('copyButton').addEventListener('click', function(ev) {
  const button = ev.currentTarget //pegando quem acionou o evento
  if (button.innerText === 'Copy') { // pegando o texto 'copy', que indica que ainda não foi copiado
    button.innerText = 'Copied!'
    button.classList.add('success') // estilizando a borda e a fonte
    navigator.clipboard.writeText(resultInput.value) //copiando o resultado (navigator é disponibilizado através do window.navigator)
  } else {
    button.innerText = 'Copy'
    button.classList.remove('success')
  }
})

//trocando o tema da calculadora
document.getElementById('themeSwitcher').addEventListener('click', function() {
  if (main.dataset.theme === 'dark') { //verificando qual é o tema atual
    root.style.setProperty('--bg-color', '#f1f5f9') //acessando as propriedades do :root
    root.style.setProperty('--border-color', '#aaa')
    root.style.setProperty('--font-color', '#212529')
    root.style.setProperty('--primary-color', '#26834a')
    main.dataset.theme = 'light'
  } else {
    root.style.setProperty('--bg-color', '#212529')
    root.style.setProperty('--border-color', '#666')
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--primary-color', '#4dff91')
    main.dataset.theme = 'dark'
  }
})
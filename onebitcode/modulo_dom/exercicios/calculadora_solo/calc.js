const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('calculateArea')
const resultInput = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function(charKeyBtn) {
  charKeyBtn.addEventListener('click', function(){
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

document.getElementById('clear').addEventListener('click', function() {
  input.value = ''
  input.focus()
})

input.addEventListener('keydown', function(ev){
  ev.preventDefault()
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  if (ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1)
  }

  if (ev.key === 'Enter') {
    calculate()
  }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
  resultInput.value = 'ERROR'
  resultInput.classList.add('error')

  const result = eval(input.value)
  resultInput.value = result

  resultInput.classList.remove('error')
}

document.getElementById('copyBtn').addEventListener('click', function(ev){
  const button = ev.currentTarget
  if (button.innerText === 'Copy') {
    navigator.clipboard.writeText(resultInput.value)
    button.innerText = 'Copied'
    button.classList.add('success')
  }else{
    button.innerText = 'Copy'
    button.classList.remove('success')
  }
})

document.getElementById('themeSwitcher').addEventListener('click', function() {
  if (main.dataset.theme === 'dark') {
    root.style.setProperty('--bg-color', '#F4F3DB')
    root.style.setProperty('--btn-color', '#3498DB')
    root.style.setProperty('--border-color', '#151415')
    root.style.setProperty('--input-color', '#151415')
    main.dataset.theme = 'light'
  }else {
    root.style.setProperty('--bg-color', '#151415')
    root.style.setProperty('--btn-color', '#3498DB')
    root.style.setProperty('--border-color', '#F4F3DB')
    root.style.setProperty('--input-color', '#f4f3db93')
    main.dataset.theme = 'dark'
  }
})
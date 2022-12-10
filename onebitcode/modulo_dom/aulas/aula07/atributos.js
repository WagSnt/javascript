const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function() {
  input.value = 'Olá, mundo!'

  console.log(input.value) // valor em tempo real
  console.log(input.getAttribute('value')) // valor pré-definido

})

document.getElementById('type').addEventListener('click', function () {
  input.type = input.type !== 'radio' ? 'radio' : 'text'
})

document.getElementById('placeholder').addEventListener('click', function() {
  input.placeholder = 'Digite algo'
})

document.getElementById('disable').addEventListener('click', function () {
  input.setAttribute('disabled', input.disabled)
})

document.getElementById('data').addEventListener('click', function() {
  const data = input.dataset.something
  console.log('O valor do atributo data-somethingElse é: ' + data)
  input.dataset.something = 'Algum outro valor'
  console.log('O valor do atributo data-somethingElse agora é: ' + input.dataset.something)
})
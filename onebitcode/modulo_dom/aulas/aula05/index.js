const form =document.getElementById('orderForm')

form.addEventListener('submit', function(ev) {
  // Evitando o comportamento padrão de um evento
  ev.preventDefault()
  const name = document.querySelector('input[name = "name"]').value
  const address = document.querySelector('input[name = "address"]').value
  const breadType = document.querySelector('select[name = "breadType"]').value
  //Usar checked em 'main', pois e deixar padrão, o selector vai pegar o primeiro main que encontrar (no caso, a carne'), e não registrando o que o usuário marcou
  const main = document.querySelector('input[name = "main"]:checked').value
  const observations = document.querySelector('textarea[name = "observations"]').value


  
  let salad = ''
  document.querySelectorAll('input[name = "salad"]:checked').forEach(function(item) {
    salad += ' . ' + item.value + '\n'
  })

  console.log({
    name,
    address,
    breadType,
    main,
    salad,
    observations
  })

  alert(
    'Pedido Realizado!' +
    '\nNome do Cliente: ' + name +
    '\nEndereço de Entrega: ' + address +
    '\nTipo de pão: ' + breadType +
    '\nPrincipal/Adicionais: ' + main + '\n' + salad +
    '\nObservações: ' + observations 
  )
})
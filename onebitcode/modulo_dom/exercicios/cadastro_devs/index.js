const form = document.getElementById(fillingForm)

form.addEventListener('submit', function(ev){
  ev.preventDefault()

  const button = document.getElementById('addTechnology')
  button.addEventListener('click', function() {
    const technologyName = document.createElement('label')
    technologyName.for = 'technology-name'
    technologyName.innerText = 'Nome da tecnologia: '
    const technologyNameInput = document.createElement('input')
    technologyNameInput.type = 'text'
    technologyNameInput.name = 'technology-name'
  })

})
function register(ev) {
  console.log(ev)
}

const button  = document.getElementById('register-button')

button.addEventListener('click', register)
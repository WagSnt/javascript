const result = prompt('Escolha uma alternativa: \na) \nb) \n c)')

switch (result) {
  case 'a': 
  alert('O resultado é "a"')
  break
  case 'b':
    alert('O resultado é "b"')
    break
  case 'c':
    alert('O resultado é "c"')
    break
  default:
    alert('Finalizando...')
}
const measure = prompt('Digite um valor em metros que deseja converter:')
const unitOfMeasurement = prompt(
  'Para qual unidade de medida você deseja converter?' +
  '\na - Milímetros (mm)' +
  '\nb - Centímetros (cm)' +
  '\nc - decímetros (dm)' +
  '\nd - decâmetros (dam)' +
  '\ne - hectômetros (hm)' +
  '\nf - Quilômetros (km)'
)

let finalResult = 0

switch(unitOfMeasurement) {
  case 'a':
    alert('Resultado: ' + measure +'m = ' + measure * 1000 + 'mm')
    break
  case 'b':
    alert('Resultado: ' + measure +'m = ' + measure * 100 + 'cm')
    break
  case 'c':
    alert('Resultado: ' + measure +'m = ' + measure * 10 + 'dm')
    break
  case 'd':
    alert('Resultado: ' + measure +'m = ' + measure / 10 + 'dam')
    break
  case 'e':
    alert('Resultado: ' + measure +'m = ' + measure / 100 + 'hm')
    break
  case 'f':
    alert('Resultado: ' + measure +'m = ' + measure / 1000 + 'km')
    break
  default:
    alert('Opção Inválida!')
    break
}
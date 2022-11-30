let options = ''

do {
  options = prompt(
    'CALCULADORA GEOMÉTRICA\n\n' +
    'Escolha abaixo, qual cálculo deseja realizar:' + 
    '\n1 - Área do triângulo' +
    '\n2 - Área do retângulo' +
    '\n3 - Área do quadrado' +
    '\n4 - Área do trapézio' +
    '\n5 - Área do triângulo' +
    '\n6 - Sair'
  )

  switch (options) {
    case '1':
      function triangleArea(a, b) {
        const result = (a * b) / 2
        return parseFloat(result)
      }

      let base = parseFloat(prompt('Informe a base do triângulo:'))
      const triangleHeight = parseFloat(prompt('Informe a altura do triângulo:'))
      let finalResult = triangleArea(base, triangleHeight)

      alert('Área do triângulo: ' + base + ' x ' + triangleHeight + ' = ' + finalResult)
      break
    case '2':
      function rectangleArea (a, b) {
        const result = a * b
        return result
      }

      const rectangleBase = parseFloat(prompt('Informe a base do retângulo:'))
      const rectangleHeight = parseFloat(prompt('Informe a altura do retângulo'))
      let rectangleResult = rectangleArea(rectangleBase, rectangleHeight)
      
      alert('Área do Retângulo: ' + rectangleBase + ' x ' + rectangleHeight + ' = ' + rectangleResult)
    case '3':
      function squareArea(){
      result = side * side
      return result
    }
    let side = prompt('Digite o valor do lado:')

    alert('Área do Quadrado: ' + side + '² = ' + result)

    case '4':
    case '5':
    case '6':
    default:
  }
} while(options !== '6')
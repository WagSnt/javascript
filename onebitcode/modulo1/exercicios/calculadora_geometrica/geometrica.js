let options = ''

do {
  options = prompt(
    'CALCULADORA GEOMÉTRICA\n\n' +
    'Escolha abaixo, qual cálculo deseja realizar:' + 
    '\n1 - Área do triângulo' +
    '\n2 - Área do retângulo' +
    '\n3 - Área do quadrado' +
    '\n4 - Área do trapézio' +
    '\n5 - Área do círculo' +
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
      break
    case '3':
      function squareArea(a){
      result = a * a
      return result
    }

    let side = prompt('Digite o valor do lado:')
    squareResults = squareArea(side)

    alert('Área do Quadrado: ' + side + '² = ' + squareResults)

    case '4':
      function trapezeArea(biggerBase, minorBase, trapezeHeight) {
        result = ((biggerBase + minorBase) * trapezeHeight) / 2
        return result
      }

      const biggerBaseInfo = parseFloat(prompt('Digite o valor da base maior:'))
      const minorBaseInfo = parseFloat(prompt('Digite o valor da base menor:'))
      const trapezeHeightInfo = parseFloat(prompt('Digite o valor da altura:'))
      const trapezeResult = trapezeArea(biggerBaseInfo, minorBaseInfo, trapezeHeightInfo) 

      alert('Área do Trapézio: (' + biggerBaseInfo + ' + ' + minorBaseInfo + ') x ' + trapezeHeightInfo + ' % 2 = ' + trapezeResult)
      break
    case '5':
      function circleArea(raio) {
        result = 3.14 * (raio * raio)
        return result
      }

      const raioInfo = parseFloat(prompt('Digite o valor do raio:'))
      const circleAreaResult = circleArea(raioInfo)

      alert('Área do círculo: pi x ' + raioInfo + '² = ' + circleAreaResult)
      break
    case '6':
      alert('Finalizando programa...')
      break
    default:
      alert('ERRO! Por favor, digite uma alternativa válida.')
      break
  }
} while(options !== '6')

alert('Programa finalizado.')
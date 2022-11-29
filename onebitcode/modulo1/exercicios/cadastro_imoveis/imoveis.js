//variables
let opitons = ''
let properties = []

do {
  options = prompt(
    'Imóveis cadastrados: ' + properties.length +
    '\n\nEscolha uma opção: ' +
    '\n1 - Salvar um imóvel' +
    '\n2 - Exibir todos os imóveis salvos' +
    '\n3 - Sair'
  )
  switch (options) {
    case '1':
      let propertyRegistration = {}

      propertyRegistration.name = prompt('Digite o nome do proprietário:')
      propertyRegistration.rooms = prompt('Digite a quantidade de quartos:')
      propertyRegistration.restroom = prompt('Digite a quantidade de banheiros:')
      propertyRegistration.garage = prompt('Possui garagem? [Ok=Sim /Cancelar=Não]')

      const revision = confirm(
        'Salvar este imóvel?\n' +
        '\nProprietário: ' + propertyRegistration.name +
        '\nQuartos: ' + propertyRegistration.rooms +
        '\nBanheiros: ' + propertyRegistration.restroom +
        '\nPossui garagem: ' + propertyRegistration.garage
      )

      if (revision) {
        properties.push(propertyRegistration)
        alert('Imóvel salvo com sucesso!')
      } else {
        alert('Registro cancelado. Retornando ao menu...')
      }
      break

    case '2':
      for (let i = 0; i < properties.length; i++) {
        alert(
          'Imóvel ' + (i + 1) +
          '\n\nProprietário: ' + properties[i].name +
          '\nQuartos: ' + properties[i].rooms +
          '\nBanheiros: ' + properties[i].restroom +
          '\nPossui Garagem: ' + properties[i].garage
        )
      }
      break
    case '3':
      alert('Salvando alterações e saindo do sistema...')
      break
    default:
      alert('ERRO! Por favor, digite uma opção válida.')
      break
  }
} while(options !== '3')

alert('Programa finalizado!')
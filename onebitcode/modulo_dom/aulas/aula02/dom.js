function show() {
  //pegando um único elemento através do Id
  const contactList = document.getElementById('contact-list') 
  console.log(contactList)


  // Pegando elementos da mesma tag (no exemplo, todos os li)
  const listElements = document.getElementsByTagName('li')
  console.log(listElements)

  // Pegando elementos da lista. Mas agora, somente os input da classe específica
  const contactInputs = document.getElementsByClassName('contact-input')
  console.log(contactInputs)


  // Mesma sintaxe do css para seleção
  const contacts = document.querySelectorAll('#contact-list > li > label') 
  console.log(contacts)

  // Econtra pelo nomme
  const contact1 = document.getElementsByName('contact1')
  console.log(contact1)

  // Exibi o primeiro que encontrar
  const firstContact = document.querySelector('#contact-list > li > label')
  console.log(firstContact)
}
function dobro(x) {
  alert('O dobro de ' + x + ' é ' + (x * 2))
}

// dobro(5)
// dobro(7)

// dobro()

function dizerOla(nome='usuário') {
  alert('Olá, ' + nome + '!')
}

// dizerOla('Wagner')
// dizerOla()

function soma(a, b) {
  alert('O resultado da soma é: ' + (a + b))
}

// soma(7, 6)


function criarUsuario(nome, email, senha, tipo = 'admin') {
  const usuario = {
    nome,
    email,
    senha,
    tipo
  }
  console.log(usuario)
}

function muitosParametros(nome, telefone, endereco, aniversario, email, senha){
  //...
}

muitosParametros('Wagner', '5555555555', 'rua vazia', 'aniversario', 'fffff@ddfs', '1245')

function objetosComoParametro(usuario){
  //...
  usuario.nome
  usuario.email
}

muitosParametros('Wagner', '5555555555', 'rua vazia', 'aniversario', 'fffff@ddfs', '1245')


//...
function muitosParametros(nome, telefone, endereco, aniversario, email, senha){
  //...
}

const dadosDoUsuario = {
  nome: '',
  telefone: '',
  email: '',
  senha: '',
  endereco: '', 
  aniversario: ''
}

objetosComoParametro(dadosDoUsuário)
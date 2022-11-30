let pessoa = {
  nome: 'Wagner',
  idade: '24',
  dizerOla() {
    console.log('Olá, Mundo! Meu nome é ' + this.nome)
  }
}

pessoa.dizerOla()
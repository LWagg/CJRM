// adicionando métodos

let user = {
    name: 'João',
    age: 31,
    email: 'joaocardoso@gmail.com',
    city: 'São Paulo',
    blogspot: ['Empadão de frango', '4 receitas de purê de batata'], 
    login: function() {
        console.log('Usuário logado') // Aqui temos uma propriedade com uma função, chamamos essa propriedade de método.
    },
    logout: function () {
        console.log('Usuário deslogado')
    }
}

user.login() // Aqui invocamos o método do objeto user.
user.logout()
// criando um objeto literal

let user = {
    name: 'João',
    age: 31,
    email: 'joaocardoso@gmail.com',
    city: 'São Paulo',
    blogspot: ['Empadão de frango', '4 receitas de purê de batata']
}

console.log(user) // mostrando o objeto

console.log(user.name) // acessando apenas uma propriedade do objeto

user.age = 32 // modificando uma propriedade do objeto

console.log(user['email']) // acessando apenas uma propriedade do objeto, mas utilizando os colchetes.

user['name'] = 'José' // modificando uma propriedade utilizando os colchetes


// strings
console.log('Hello, world!')
const email = 'leite.wagg@gmail.com'
console.log(email)

// concatenação de strings
const firstName = 'Wagner'
const lastName = 'Leite'
const fullName = firstName + ' ' + lastName
console.log(fullName)

// acessando caracteres
console.log(fullName[0]) // Mostrará o W do nome

// comprimento de uma string
console.log(fullName.length) // Propriedade para saber quantos caractéres a string tem. Um espaço em branco entre os nomes também conta no comprimento.

// métodos de string - Métodos e funções são semelhantes, muito utilizado para dizer a mesma coisa
console.log(fullName.toUpperCase())
const result = fullName.toLowerCase()
console.log(result, fullName) // Esses métodos não alteram a condição original da string. Alguns modificam e outros não.

const index = email.indexOf('@') // Passamos um ARGUMENTO para o método encontrar a posição(index) do @
console.log(index)



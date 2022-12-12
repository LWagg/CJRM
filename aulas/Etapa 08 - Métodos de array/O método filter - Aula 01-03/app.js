// Método filter para gerarmos um novo array somente com os números acima de 37

const randomNumbers = [5, 36, 99, 37, 62]

const numbersGreaterThan37 = randomNumbers.filter(number => number > 37)

console.log(numbersGreaterThan37) 

// Gerando um novo array apenas com os usuários premium

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
  ]

const premiumUsers = users.filter(user => user.premium)

console.log(premiumUsers, users)

// Código mais enxuto que o map pois o tipo de dado que o premium armazena é boolean, assim como o retorno de um filter também é boolean.
// valores primitivos

let scoreOne = 50
let scoreTwo = scoreOne

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

scoreOne = 100

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

/* 
    Aqui temos um exemplo de cópia de valores primitivos, que são armazenados em uma STACK (pilha). Quando fazemos uma nova atribuição de valor para o scoreOne, por mais que o scoreTwo esteja recebendo o valor de scoreOne, ele não é mudado. Isso acontece pois estamos lidando com dois valores criados em espaços diferentes na memória(stack).
*/

// valores de referência

let userOne = {name: 'Wagner', age: 30}
let userTwo = userOne

console.log(userOne, userOne)

userOne.age = 35

console.log(userOne, userOne)

/*
    Aqui temos o mesmo exemplo de cópia de valores, mas quando modificamos a propriedade age do userOne, o userTwo também foi mudado. Isso acontece pois os tipos de referência são armazenados em um HEAP (Amontoado) e aqui os dados não são empilhados, se dois objetos são criados iguais, eles se modificarão juntos.
*/
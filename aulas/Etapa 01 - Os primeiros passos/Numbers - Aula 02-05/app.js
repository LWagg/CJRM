// inteiros e decimais
const radius = 10
const pi = 3.14 //Usar ponto para números decimais
console.log(radius, pi)

//operadores aritméticos
const area = pi * radius ** 2
console.log(area)

//ordem das operações

/*
    1º - Parênteses
    2º - Expoentes ou raízes
    3º - Multiplicação e divisão
    4º - Adição e subtração
 */

// operadores de incremento e decremento
let postLikes = 10
postLikes++ // -- Para decremento
console.log(postLikes) // Incremento

//operadores addition, subtraction, multiplication e division assignment
// postLikes = postLikes + 10 / maneira antiga
postLikes += 10 // Recebe postLikes(11) + 10
console.log(postLikes)
postLikes *= 2
console.log(postLikes) 

//Nan - not a number
console.log(7 / 'oi') // Operação que não faz sentido, vai retornar NaN

// concatenação de strings com número
const likesMessage = 'O post tem ' + postLikes + ' likes.'
console.log(likesMessage)


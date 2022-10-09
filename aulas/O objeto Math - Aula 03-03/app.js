// o objeto MATH

console.log(Math) // Conseguimos visualizar os métodos do objeto
console.log(Math.PI)
console.log(Math.E)


const area = 7.7

console.log(Math.round(area)) // Aqui usamos o método do MATh que arredonda um número para o lado mais perto.

console.log(Math.floor(area)) // Aqui o FLOOR sempre vai arredondar o número para baixo.

console.log(Math.ceil(area)) // Aqui o CEIL arredonda o número para cima.

console.log(Math.trunc(area)) // Aqui o TRUNC remove a parte decimal e deixa o número inteiro


// Números aleatórios

const randomNumber = Math.random() // Aqui geramos um número aleatório entre 0 e 1

console.log(randomNumber)

console.log(Math.round(randomNumber * 100)) // Aqui mesclamos o método ROUND e o RANDOM para gerarmos um número aleatório entre 0 e 100
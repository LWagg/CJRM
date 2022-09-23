// booleans e comparações
//console.log(true, false, 'true', 'false') // Valores diferentes, quando passados por aspas, true e false viram strings.

// Métodos podem retornar booleans
const email = 'brucewayne@rogermelo.com.br'
const includes = email.includes('#') // Método que verifica se existem uma determinada string passada por argumento.
const names = ['dio', 'roger', 'robert']
const arrayIncludes = names.includes('roger') //Mesmo método utilizado em array, verificando se existe um nome dentro dele.
//onsole.log(includes)
//console.log(arrayIncludes)

// Operadores de comparação
const age = 31
const nome = 'roger'

//onsole.log(age == 31)
//console.log(age == 35)
//console.log(age != 35) // Operador de diferença (leia o sinal: NÃO É IGUAL)

console.log(nome == 'roger')
console.log(nome > 'belinha') // Aqui o resultado vai dar TRUE pois o JavaScript compara a primeira letra da string e as últimas letras do alfabeto são maiores (em ordem crescente).
console.log('z' < 'y') // FALSE pois z é maior que y no alfabeto 

//Vale lembrar que uma letra minúscula tem valor maior que uma letra maiúscula em JavaScript => 'r' > 'R' = TRUE 
 
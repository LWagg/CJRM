// Arrays
let heroes = ['Batman', 'Catwoman', 'Iron Man']
heroes[2] = 'Spider-Man' // Aqui trocamos o index 2 do array que era 'Iron Man'
console.log(heroes)
const ages = [31, 25, 39, 40, 25]


// Métodos de arrays
console.log(heroes.length)
const joinHeroes = heroes.join('-') /* O método Join retorna uma nova string com todos os itens do array concatenados e separados por vírgula. Podemos passar algum argumento como item separador. */
console.log(joinHeroes)
const indexOf25 = ages.indexOf(25)
const moreHeroes = heroes.concat(['Superman', 'Wolverine']) // Para concatenar dois arrays em um só
const pushToHeroes = heroes.push('Cyclops', 'Hulk') // Método para adicionar novos itens ao array
const popHeroes = heroes.pop() // Método que remova o último item de um array e o retorna. Esse método modifica o array original. 
console.log(indexOf25)
console.log(moreHeroes)
console.log(pushToHeroes) /* Aqui só irá mostrar quantos itens tem no array, para ver a lista, chamamos o array heroes com os novos índices colocados através do método push */
console.log(popHeroes)
const present = new Date()

console.log(present)
console.log(`getFullYear: ${present.getFullYear()}`) // Ano atual
console.log(`getFullYear: ${present.getMonth()}`) //Mês atual, considerando janeiro como o mês 0.
console.log(`getFullYear: ${present.getDate()}`) // Dia do mês
console.log(`getFullYear: ${present.getDay()}`) // Dia da semana, considerando domingo como o dia 0.
console.log(`getFullYear: ${present.getHours()}`) 
console.log(`getFullYear: ${present.getMinutes()}`) 
console.log(`getFullYear: ${present.getSeconds()}`) 

console.log('timestamp', present.getTime()) //Quantidade de milisegundos que se passaram desde 1 de janeiro de 1970 até o doa atual

console.log('toDateString:', present.toDateString()) // Data convertida em string
console.log('toTimeString:', present.toTimeString()) // Horário convertido em string
console.log('toLocaleString:', present.toLocaleString()) // data e hora convertida em string
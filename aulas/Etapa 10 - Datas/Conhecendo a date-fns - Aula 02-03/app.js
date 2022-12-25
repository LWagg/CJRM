const present = new Date ()

console.log(dateFns.format(present, 'MMMM'))
console.log(dateFns.format(present, 'YY'))
console.log(dateFns.format(present, 'dddd'))
console.log(dateFns.format(present, 'DD/MM/YYYY')) // Modelos de exibição de datas com o dateFns

const past = new Date('April 7 2022 17:00:00')

console.log(dateFns.distanceInWords(present, past)) // Comparando a distância de duas datas com a dateFns
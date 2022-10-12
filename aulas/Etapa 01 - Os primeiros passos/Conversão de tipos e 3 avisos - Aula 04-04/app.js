let score = '100'
score = Number(score) // Aqui invocamos a FUNÇÃO CONSTRUTORA Number, que transformou a variável score de string para number.
console.log(score + 1)
console.log(typeof score) // Operador typeof verifica o tipo de dados que está armazenado na variável.

const crazyConversion = Number('Maça')
console.log(crazyConversion) // Sempre que tentarmos converter um valor sem sentido, será retornano NaN.
 
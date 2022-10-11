// Obter um elemento através do ID
const title = document.getElementById('title')

console.log(title)

// Obter elementos através do nome da classe
const errors = document.getElementsByClassName('error')

console.log(errors) // Aqui será trazido uma HTMLcollection no console, pois temos dois elementos coma  classe error. Podemos acessar as posições entre colchetes mas não podemos usar um forEach em uma HTMLcollection.

// obter elementos através do nome da tag

const paragraphs = document.getElementsByTagName('p')

console.log(paragraphs) // Aqui será gerado uma HTMLcollection com todos os parágrafos que temos na página.
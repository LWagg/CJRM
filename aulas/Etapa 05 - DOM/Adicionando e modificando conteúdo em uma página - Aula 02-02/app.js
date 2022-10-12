const paragraph = document.querySelector('p')

// console.log(paragraph.innerText) // com o innerText removemos as tags no console.

// paragraph.innerText += ' Texto inserido'

const paragraphs = document.querySelectorAll('p')

//paragraphs.forEach((paragraph, index) => {
  //  paragraph.innerText += ` Novo Texto ${index + 1}` // Iteramos pelos parágrafos para exibi-los em ordem e sem as tags
//})

const div = document.querySelector('.content')

div.innerHTML += '<h2>Novo h2</h2' // Aqui adicionamos tudo o que a div content ja tem, que no caso é uma tag P, e adicionamos uma tag H2 via JavaScript


const people = ['Jonathan', 'Ana', 'Juciane']

people.forEach(person => {
    div.innerHTML += `<p>${person}</p>` // Iteramos pelo array para adicionar os nomes na página, dentro da DIV.
})
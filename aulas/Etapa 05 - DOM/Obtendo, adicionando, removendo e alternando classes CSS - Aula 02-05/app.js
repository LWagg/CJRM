//const paragraph = document.querySelector('p')



//paragraph.classList.add('error') // Aqui nós adicionamos uma class via JavaScript ao parágrafo qjue está no HTML, se olharmos o HTML, não veremos a classe atribuída. Para remover um atributo class, utilizamos o método remove no lugar do add.
//console.log(paragraph.classList) // Aqui listamos as classes que um elemento selecionado pelo query pode ter, no caso o P.

//paragraph.classList.remove('error') //Para remover um atributo class, utilizamos o método remove no lugar do add.
//paragraph.classList.add('success') // Aqui, depois de removermos o 'error', adicionamos a classe 'success', com outra estilização CSS.


const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(paragraph => {
  if (paragraph.textContent.includes('error')) {
    paragraph.classList.add('error') // Aqui usamos o textContent no lugar do innerText para obter o conteúdo dos paragraphs, essa propriedade busca até textos que estão ocultos na página HTML
  }

  if (paragraph.textContent.includes('success')) {
    paragraph.classList.add('success') 
  }
})



const title = document.querySelector('h1')

title.classList.toggle('test') // método toggle adiciona uma nova classe ao elemento, no caso o nosso H1. Se passarmos um nome de classe já existente, ela é removida.




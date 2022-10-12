const h1 = document.querySelector('body > h1') // Aqui pegamos o primeiro parágrago disponível na pagina HTML.

console.log(h1) // No console será exibida a TAG que selecionamos pelo querySelector.

const paragraphs = document.querySelectorAll('p') // Aqui selecionamos todas as tags P que temos em nossa página.

console.log(paragraphs[0]) // Podemos usar alguns métodos para acessar a nodelist que é gerada pelo querySelectorAll, como por exemplo, acessar apenas uma posição passada entre colchetes

paragraphs.forEach(paragraph => {
    console.log(paragraph) // Podemos tambem usar o forEach para iterar pelos itens.
})
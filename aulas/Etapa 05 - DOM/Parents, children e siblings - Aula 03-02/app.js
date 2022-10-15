const article = document.querySelector('article')

console.log(article.children) // Aqui usamos a propriedade children para saber quais tags estão dentro do article. Isso vai retornar uma HTMLCollection dos itens, lembrando que não podemos usar um forEach em HTMLCollection.

console.log(Array.from(article.children)) // Aqui nós transformamos o HTMLCollection em um array, através do método FROM da função construtora ARRAY. Lembrando que essa invoção do array.from não modifica o conteúdo original do article.

//Array.from(article.children).forEach(element => {
    //element.classList.add('article-element') // Aqui nós adicionamos uma classe (article-element) em todos as childrens existentes dentro da nossa tag article.
//})

const title = document.querySelector('h2')
console.log(title.parentElement) // Aqui nós descobrimos quem é o Parent da nossa tag h2. Se repetirmos a invocação da propriedade parentElement ao lado dela mesma, descobrimos quem é o parent do parent do H2.

console.log(title.nextElementSibling) // Aqui nós descobrimos quem é o sibling mais próximo do h2. Se trocarmos o next por previous, descobrimos quem é o sibling que vem antes do h2
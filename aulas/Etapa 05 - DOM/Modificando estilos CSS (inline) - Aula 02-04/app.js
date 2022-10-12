const title = document.querySelector('h1')

// title.setAttribute('style', 'margin: 50px;') // Devemos cuidar ao usar o setAttribute pois ele pode sobreescrever o estilo que já foi implementado e que não é de nosso desejo mudar. No caso aqui, a color azul sumiu e voltou a set preta.

console.log(title.style) // Aqui vemos um objeto do que podemos usar para estilizar algo através do JavaScript
console.log(title.style.color) // aqui vemos a cor que está atualmente na TAG.

title.style.margin = '50px' // Aqui nós colocamos uma margem de 50px ao H1, que foi selecionado e colocado dentro da const title. Essa alteração não sobreescreve outros estilos que ja estavam setados na página HTML, como por exemplo, a cor azul das letras.

title.style.color = 'pink' // Aqui nós mudamos a cor do texto para rosa e margem que colocamos logo acima permaneceu.

title.style.fontSize = '50px' // Aqui aumentamos o tamanho da letra. Devemos prestar atenção em como passamos propriedades que tenham mais de uma palavra, no caso, em CSS escrevemos font-size, mas em JavaScript devemos usar o camel case (fontSize).

title.style.margin = '' // Quando passamos um valor vazio, nós removemos a margin que foi colocada logo acima e a página volta ao estado original.
const button = document.querySelector('button')

button.addEventListener('click', () => {
    console.log('Clicou no botão')
}) // Usamos o método addEventListener para colocar uma ação no button, passamos por parâmetro o tipo de evento('click') e uma função de callback que realiza a ação desejada.

const lis = document.querySelectorAll('li')

lis.forEach(li => {
    li.addEventListener('click', event => {
        const clickedElement = event.target // Quando um evento acontece, o Browser disponibiliza dentro do parâmetro(que chamamos de event) um objeto que contém informações sobre o evento que aconteceu, no caso o click. Através desse objeto, conseguimos usar a propriedade TARGET para saber em qual elemento da lista o usuário clicou.
        clickedElement.style.textDecoration = 'line-through'
    })
})
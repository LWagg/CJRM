const ul = document.querySelector('ul')

// ul.remove() // Aqui removemos a lista da página

const lis = document.querySelectorAll('li')

lis.forEach(li => {
    li.addEventListener('click', event => {
        const clickedElement = event.target 
        clickedElement.remove() // Aqui invocamos o método remove() para remover um elemento da lista ao clicar nele.
    })
})

const button = document.querySelector('button')

button.addEventListener('click', () => {
    const li = document.createElement('li') // Aqui fazemos a const LI criar um novo item na lista toda vez que houver um click no button.
    li.textContent = 'Novo Item' // Aqui o texto que o novo item da lista receberá
    ul.append(li) // o Método append insere o elemento child (li) que ele recebeu por parâmetro no elemento parent (UL). Esse elemento será colocado como último child. Para colocarmos um child em primeiro na lista, usamos o método prepend() no lugar do append().
})


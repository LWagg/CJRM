const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    const li = document.createElement('li')
    
    li.textContent = 'Novo Item' 
    ul.prepend(li) 
})

// event.stopPropagation() // Aqui usamos o método stopPropagation da propriedade event para impedir o event bubbling de acionar o evento que foi setado no elemento parent da LI (que é a UL)
       

ul.addEventListener('click', event => {
    console.log('clicou na UL') // Aqui propragamos um event bubbling. Quando clicamos no elemento child (LI), automaticamente o evento do parent(UL) é disparado.
    console.log(event.target) // usamos o event.target para saber em qual li o usuário clicou.
    
    
    const clickedElement = event.target

    if (clickedElement.tagName === 'LI') // Utilizamos a propriedade tagName para obter uma string que nos indica se o elemento LI foi clicado.
        clickedElement.remove()
})


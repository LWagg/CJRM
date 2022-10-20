const form = document.querySelector('.signup-form')
const usernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
    event.preventDefault() // Aqui evitamos que a página seja recarregada na hora que o botão é clicado
    console.log(usernameInput.value) // aqui usamos a propriedade value para obter o que foi digitado no campo, junto com a referência do campo (usernameInput)
    
    // console.log(form.username.value) Uma outra forma de obter o dado digitado, nesse caso não precisariamos pegar a referência do input lá encima (usernameInput) apenas passariamos o id como uma propriedade da referencia do form.
})
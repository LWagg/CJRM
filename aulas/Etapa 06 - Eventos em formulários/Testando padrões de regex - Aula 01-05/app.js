const form = document.querySelector('.signup-form')
// const usernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
    event.preventDefault() 
    console.log(event.form.username.value) 
})

const username = '123rogerm'
const pattern = /^[a-z]{6,}$/
// const isAMtach = pattern.test(username) // Aqui testamos o usuário através do método de regex chamado test(), passando o usuário como parâmetro.

// if (isAMtach) {
//     console.log('O teste da regex passou')
// } else {
//     console.log('O teste da regex não passou')
// }

const result = username.search(pattern) // Método de string que retorna em qual posição da mesma o match aconteceu.

console.log(result)


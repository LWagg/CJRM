const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')


form.addEventListener('submit', event => {
    event.preventDefault() 

    const username = event.target.username.value
    const usernameRegex = /^[a-zA-z]{6,12}$/
    const isAValidUsername = usernameRegex.test(username)
    
    if (isAValidUsername) {
        feedback.textContent = 'Username válido!'
        return
    }

    feedback.textContent = 'O username deve conter entre 6 a 12 caracteres e deve conter apenas letras'
    
})
// utilizando callbacks

const ul = document.querySelector('[data-js="ul"]')

const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

let HTMLTemplate = ''

socialNetworks.forEach(socialNetwork => { // FUNÇÃO DE CALLBACK DENTRO DO MÉTODO FOREACH
    HTMLTemplate += `<li style="color: deeppink;">${socialNetwork}</li>`
})

ul.innerHTML = HTMLTemplate
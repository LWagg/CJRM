 // a palavra-chave this

 let user = {
    name: 'João',
    age: 31,
    email: 'joaocardoso@gmail.com',
    city: 'São Paulo',
    blogspot: ['Empadão de frango', '4 receitas de purê de batata'], 
    login: function() {
        console.log('Usuário logado') 
    },
    logout () { // Aqui for removida a palavra function e os dois pontos. Funciona como um shortcut. Não influência em nada no código.
        console.log('Usuário deslogado')
    },
    logBlogPosts: function () {
        console.log(`${this.name} escreveu os seguintes códigos:`)
        
        this.blogspot.forEach(post => { // Aqui usamos function declaration intencionalmente. As arrow function acabam referenciando o THIS para o objeto WINDOW, mesmo utilizando-a dentro do método.
            console.log(post)
        }) // Aqui a palavra-chave THIS vai referenciar o objeto USER. Aí passamos o valor da propriedade que queremos acessar através da função logBlogPosts. O THIS é um objeto de contexto, ele representa o contexto no qual o códifo atual está sendo executado.
    }
}

user.logBlogPosts()

// console.log(this) // Se invorcamos o THIS logo de inícío, ele vai retornar o objeto WINDOW. 
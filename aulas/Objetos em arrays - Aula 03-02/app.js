// objetos em arrays


let user = {
    name: 'João',
    age: 31,
    email: 'joaocardoso@gmail.com',
    city: 'São Paulo',
    blogspot: [
        {title: 'Empadão de frango', likes: 30}, // Aqui colocamos dois objetos dentro de um array, totalmente possível e comum de se ver, nos ajuda a tratar conteúdos maiores.
        {title: '4 receitas de purê de batata', likes: 50}
    ], 
    login: function() {
        console.log('Usuário logado') 
    },
    logout () { 
        console.log('Usuário deslogado')
    },
    logBlogPosts: function () {
        console.log(`${this.name} escreveu os seguintes códigos:`)
        
        this.blogspot.forEach(post => { 
            console.log(post.title, post.likes)
        })
    }
}

user.logBlogPosts()

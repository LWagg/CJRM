fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log('Response', response)
        return response.json() // Essa invocação retorna uma promisse, que será lida e exibida no .then logo abaixo // 
    })
    .then(users => console.log(users))
    .catch(error => console.log(error))

/*
    1º passo: Buscar os dados com o fetch(), passando a url como argumento.
    2º passo: Obter a resposta(response) e retorna uma promisse com o response.json()
    3º passo: Encadear um segundo .then() na promisse que o primeiro .then() está retornando e na função do segundo .then fazer algo com os ddados, no caso do exemplo, apenas exibir no console.
*/
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log('Response', response)
        return response.json() // Essa invocação retorna uma promisse, que será lida e exibida no .then logo abaixo // 
    })
    .then(users => console.log(users))
    .catch(error => console.log(error))


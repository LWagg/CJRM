const getUsers = async  () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    console.log(users)
}

getUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//         console.log('Response', response)
//         return response.json() 
//     })
//     .then(users => console.log(users))
//     .catch(error => console.log(error))


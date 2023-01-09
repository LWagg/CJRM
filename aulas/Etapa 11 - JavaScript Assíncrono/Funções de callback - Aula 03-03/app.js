const getToDos = callback => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => { 
        const isRequestOk = request.readyState === 4 && request.status === 200
        const isRequestNotOk = request.readyState === 4
        
        if (isRequestOk) {
            callback(null, request.responseText)
            return
        }
    
        if (isRequestNotOk) {
            callback('Não foi possível obter os dados', null)
        }
    })
    
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
    request.send()
}

getToDos((error, data) => {
    console.log('Callback executado')
   
    if(error) {
        console.log(error)
        return
    }

    console.log(data)
})






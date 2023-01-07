const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => { 
    if (request.readyState === 4) {
        console.log(request.responseText)
    }
})

/* 
Para verificarmos o estado atual da requisição, adicionas um listener de evento no request do tipo 'readystatechange'. Esse listener nos retorna um número que representa o estado atual.

0 - UNSENT
1 - OPENED
2 - HEADERS_RECEIVED
3 - LOADING
4 - DONE
*/

request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
request.send()


// forEach e callbacks

const myFunc = callback => { 
    const value = 77

    callback(value)  // AQUI INVOCAMOS O CALLBACK POIS O ARGUMENTO QUE ELE RECEBE É A DECLARAÇÃO DE UMA FUNÇÃO 
}

myFunc(number => { //QUANDO PASSAMOS UMA FUNÇÃO COMO ARGUMENTO DE OUTRA FUNÇÃO, DAMOS O NOME DE CALLBACK, OU SEJA, A FUNÇÃO QUE ESTAMOS PASSANDO COMO ARGUMENTO AQUI, VAI SER ATRIBUÍDA AO PARÂMETRO CALLBACK LÁ ENCIMA.
    console.log(number)
})


const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']


 /*
    O MÉTODO FOREACH PODE RECEBER 3 PARÂMETROS
        1° - O ITEM ATUAL QUE ESTÁ SENDO ITERADO
        2° - O INDEX DO ITEM ATUAL
        3° - O ARRAY QUE ESTÁ SENDO ITERADO
*/


const logArrayInfo = (socialNetwork, index, array) => {
    console.log(index, socialNetwork, array) 
}

socialNetworks.forEach(logArrayInfo) // AQUI PASSAMOS UMA FUNÇÃO DE CALLBACK COMO ARGUMENTO DO MÉTODO forEach, QUE POR SUA VEZ FAZ A MESMA FUNÇÃO DE UM FOR, QUE É ITERAR SOBRE O ARRAY.




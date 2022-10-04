// função tradicional

//const double = function (number) {
    //return number * 2
//}





// arrow function

const double = number => {  // QUANDO TEMOS APENAS UM PARÂMETRO, OS PARÊNTESES SÃO OPCIONAIS, MAS UM DEFAULT PARAMETER NÃO FUNCIONA COM ESSA SINTAXE
    return number * 2
}

// SE O BLOCO DE CÓDIGO DENTRO DA ARROW FUNCTION CONTER APENAS UMA LINHA, PODEMOS ELIMINAR A PALAVRA-CHAVE RETURN E JOGARMOS A LINHA DE CÓDIGO PARA O LADO DA SETA (=>).

// const double = number => number * 2


const result = double(3)
console.log(`O resultado é: ${result}`)
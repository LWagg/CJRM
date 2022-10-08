// variáveis e escopo de bloco

let age = 31 // Uma variável de escopo global, pode ser acessada em qualquer parte do código

// let age = 51 // Aqui dará erro pois estamos tentando criar duas variáveis iguais no mesmo escopo

if (true) {
    let age = 41 // Aqui declaramos a mesma variável que temos no escopo global, mas como ela não está no mesmo escopo da outra AGE, nao dará erro. Porém, só podemos acessa-lá dentro desse bloco de código. Chamamos isso de escopo local.
    console.log(`Dentro do 1º bloco de código: ${age}`)
}


console.log(`Fora do bloco de código: ${age}`)
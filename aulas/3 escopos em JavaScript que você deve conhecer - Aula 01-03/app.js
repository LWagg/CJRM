/* Escopos que precisamos conhecer
    1 - Escopo de funções
    2 - Escopo de blocos
    3 - Escopo léxico

Escopo pode ser definido como a visibilidade de uma variável. Dependendo do lugar onde você delcara uma variável, ela pode ou não ser acessada.
*/


function myFunc () {
    let cat = 'Zeca'
    const age = 3
    var color = 'cinza'
}



//console.log(cat) // a Variável CAT não existe fora do escopo da função, logo ela não pode ser acessada pelo console. Aqui temos um escopo de função.


const dog = 'Tobi'

function dogWatch () {
    const dog = 'Tison'
}

// Podemos ter duas variáveis de mesmo nome, desde que estejam em escopos diferentes.


if (true) {
    var dragon = 'Baleriom'
}

console.log(dragon) // a VAR pode escapar de todos os escopos, menos de funções. Aqui temos o escopo de bloco



const externo = () => {
    const book = 'Sapiens'

    const internal = () => {
        console.log(book.toUpperCase())
    }

    internal()
}

externo() // Criamos uma função que tem outra função dentro (escopo léxico). Aqui a função que está dentro (aninhada) pode acessar a variável que foi declarada na primeira função. Mas o inverso não acontece. Variáveis criadas na função internal não pode ser acessada pela função externo.


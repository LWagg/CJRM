// Gerando a soma de um array com o Reduce. O accumulator armazena o 0, passado como segundo argumento do reduce (o primeiro argumento ér a função de callback). Assim ele vai somando e armazenando o valor atual da iteração nele mesmo.

const numbers = [1, 2, 3]

const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0)

console.log(sumResult)

// Obtendo a soma da pontuação de um jogador

const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
  ]

const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
    if (phaseScore.name === 'Roger Melo') {
        accumulator += phaseScore.score
    }

    return accumulator
}, 0)

console.log(rogerScore)
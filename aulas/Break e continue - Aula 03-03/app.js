// break e continue

const scores = [50, 25, 0, 30, 100, 20, 10]

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) {
        continue // O continue vai pular uma iteração especificada na condição e continuar normalmente.
    }
    
    
    
    console.log(`Sua pontuação: ${scores[i]}`)

    if (scores[i] === 100) {
        console.log('Parabéns, você atingiu a pontuação máxima!')

        break // Aqui o break faz com que a iteração pare de ser executada por já termos a nossa necessidade atingida.
    }
}
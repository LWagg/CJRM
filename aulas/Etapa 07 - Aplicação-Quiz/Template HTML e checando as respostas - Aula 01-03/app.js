const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')

const correctAnswers = ['D', 'C', 'A', 'B']

let score = 0

const getUsersAnwers = () => {
    let userAnswers = [] 

    correctAnswers.forEach((_, index) => {
        const userAnswer = form[`inputQuestion${index + 1}`].value
        userAnswers.push(userAnswer)
    })

     return userAnswers
}

const calculateUserScore = userAnswers => {
    userAnswers.forEach((userAnswer, index) => {
        const isUserAnswerCorrect = userAnswer === correctAnswers[index]
        
        if (isUserAnswerCorrect) {
        score += 25
        }
    })
}

const showFinalScore = () => {
    scrollTo({
        top: 0,
        left: 0, 
        behavior: 'smooth'
    })
    finalScoreContainer.classList.remove('d-none')
}

const animateFinalScore = () => {
    let counter = 0

    const timer = setInterval (() => {
        
        if (counter === score) {
            clearInterval(timer)
        }

        finalScoreContainer.querySelector('span').textContent = `${counter++}%`
    }, 10)
}

form.addEventListener('submit', event => {
    event.preventDefault()

    const userAnswers = getUsersAnwers()

    calculateUserScore(userAnswers)
    showFinalScore()
    animateFinalScore()
})






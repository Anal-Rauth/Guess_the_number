const inputC = document.querySelector('.inputC')
const form = document.querySelector('form')
const result = document.querySelector('.result')
const allGuesses = document.querySelector('.all-guesses')
const allGuessesArray = []
const submitBtn = document.querySelector('.submit-btn')
const restartBtn = document.querySelector('.restart-btn')


let randomNumber = Math.round(Math.random() * 100)
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const userInputValue = parseInt(inputC.value)
    if (userInputValue > randomNumber) {
        result.innerText = 'Too high'
    } else if (userInputValue < randomNumber) {
        result.innerText = ('Too low')
    } else {
        result.innerText = 'congrats! You got it.'
        restartBtn.disabled = false
        submitBtn.disabled = true
    }
    allGuessesArray.push(userInputValue)
    allGuesses.innerText = 'Your guesses: ' + allGuessesArray.join(', ')

    form.reset()

})

restartBtn.addEventListener('click', () => {
    result.innerText = ''
    allGuesses.innerText = ''
    restartBtn.disabled = true
    submitBtn.disabled = false
    allGuessesArray.length = 0
    randomNumber = Math.round(Math.random()*100)
})
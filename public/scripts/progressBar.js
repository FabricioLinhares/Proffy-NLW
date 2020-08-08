let bar = document.createElement('div')
bar.id = 'progress-bar'
document.body.appendChild(bar)
setInterval(updateBarProgress, 1000)

const userInputUpdate = {
    amount() {
        const userInputs = document.querySelectorAll('.user-input')
        return userInputs.length
    },
    filled() {
        const userInputs = document.querySelectorAll('.user-input')
        let userInputsFilled = 0
        userInputs.forEach(userInput => {
            if (userInput.value.length !== 0) userInputsFilled++
        })
        return userInputsFilled
    },
    progress() {
        const total = this.amount()
        const currentFilled = this.filled()
        const progressPercent = currentFilled / total
        return progressPercent
    }
}

function updateBarProgress() {
    bar.style.width = 100 * userInputUpdate.progress() + 'vw'
}
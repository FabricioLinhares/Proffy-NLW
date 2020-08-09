const removeButtons = {
    hidden() {
        const removeButtonAll = document.querySelectorAll('.remove-time')
        removeButtonAll.forEach(button => {
            button.style.display = 'none'
        })
    },
    show() {
        const removeButtonAll = document.querySelectorAll('.remove-time')
        removeButtonAll.forEach(button => {
            button.style.display = ''
        }) 
    },
    update() {
        const removeButtonAll = document.querySelectorAll('.remove-time')
        if (removeButtonAll.length > 1) this.show()
        else this.hidden()
    },
    deleteField(event) {
        const allScheduleItems = document.querySelectorAll('.schedule-item')
        if (allScheduleItems.length > 1) {
            const removeFieldButton = event.target.classList[0] === 'remove-time' ? event.target : event.target.parentNode
            const removeField = removeFieldButton.parentNode.parentNode
            removeField.remove()
        } else {
            window.alert('Você precisa ter, no mínimo, um horário!')
        }
        removeButtons.update()
    }
}

const updateTimeLimit = {
    max(inputFrom, index) {
        const inputTo = document.getElementsByName('time_to[]')[index]
        inputFrom.setAttribute('max',inputTo.value)
    },
    min(inputTo, index) {
        const inputFrom = document.getElementsByName('time_from[]')[index]
        inputTo.setAttribute('min',inputFrom.value)
    },
    all() {
        const inputFromAll = document.getElementsByName('time_from[]')
        const inputToAll = document.getElementsByName('time_to[]')
        inputFromAll.forEach((inputFrom, index) => {
            updateTimeLimit.max(inputFrom, index)
        })
        inputToAll.forEach((inputTo, index) => {
            updateTimeLimit.min(inputTo, index)
        })
    }
}

const addListener = {
    addFieldButton() {
        const addFieldButton = document.querySelector('#add-time')
        addFieldButton.addEventListener('click', cloneField)
    },
    removeFieldButton(button) {
        button.addEventListener('click', removeButtons.deleteField)
    },
    inputTimeLimit() {
        const submitButton = document.querySelector('footer button')
        submitButton.addEventListener('click', updateTimeLimit.all)
    },
    init() {
        this.addFieldButton()

        const firstTimeField = document.querySelector('.schedule-item')
        const firstRemoveFieldButton = firstTimeField.querySelector('.remove-time')
        this.removeFieldButton(firstRemoveFieldButton)

        this.inputTimeLimit()
    }
}

function cloneField() {
    const fieldContainers = document.querySelectorAll('.schedule-item')
    const lastFieldContainer = fieldContainers[fieldContainers.length - 1]
    const lastFieldContainerInputs = lastFieldContainer.querySelectorAll('input')
    let isInputsFilled = true
    lastFieldContainerInputs.forEach(input => {
        isInputsFilled = isInputsFilled && (input.value || false)
    })
    if (isInputsFilled) {
        const newFieldContainer = lastFieldContainer.cloneNode(true)
        const fields = newFieldContainer.querySelectorAll('input')
        fields.forEach(input => {
            input.value = ""
        });
        const scheduleItems = document.querySelector('#schedule-items')
        scheduleItems.appendChild(newFieldContainer)

        const removeFieldButton = newFieldContainer.querySelector('.remove-time')
        addListener.removeFieldButton(removeFieldButton)
    } else {
        window.alert('Preencha o último horário antes!')
    }
    removeButtons.update()
}

addListener.init()
removeButtons.update()
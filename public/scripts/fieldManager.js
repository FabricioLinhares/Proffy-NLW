const removeButtons = {
    addListener(fieldContainer) {
        const fieldButton = fieldContainer.querySelector('.remove-time')
        fieldButton.addEventListener('click',this.deleteField)
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
    },
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
        removeButtons.addListener(newFieldContainer)
    } else {
        window.alert('Preencha o último horário antes!')
    }
    removeButtons.update()
}

const addFieldButton = document.querySelector('#add-time')
addFieldButton.addEventListener('click', cloneField)

const firstTimeField =document.querySelector('.schedule-item')
removeButtons.addListener(firstTimeField)
removeButtons.update()
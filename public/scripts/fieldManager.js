const addFieldButton = document.querySelector('#add-time')
addFieldButton.addEventListener('click', cloneField)

const firstTimeField =document.querySelector('.schedule-item')
updateRemoveFieldButtonListener(firstTimeField)

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
        const scheduleItems = document.querySelector('#schedule-items').appendChild(newFieldContainer)
        updateRemoveFieldButtonListener(newFieldContainer)
    } else {
        window.alert('Preencha o último horário antes!')
    }    
}

function updateRemoveFieldButtonListener(fieldContainer) {
    const fieldButton = fieldContainer.querySelector('.remove-time')
    fieldButton.addEventListener('click',deleteField)
}

function deleteField(event) {
    const allScheduleItems = document.querySelectorAll('.schedule-item')
    if (allScheduleItems.length > 1) {
        const removeFieldButton = event.target.classList[0] === 'remove-time' ? event.target : event.target.parentNode
        const removeField = removeFieldButton.parentNode.parentNode
        removeField.remove()
    } else {
        window.alert('Você precisa ter, no mínimo, um horário!')
    }   
}
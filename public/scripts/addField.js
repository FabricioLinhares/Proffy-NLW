const addFieldButton = document.querySelector('#add-time')
addFieldButton.addEventListener('click', cloneField)
function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(input => {
        input.value = ""
    });
    const scheduleItems = document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    
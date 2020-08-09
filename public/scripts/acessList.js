const acessListButton = document.querySelector('.study')
acessListButton.addEventListener('click', redirectForStudy)

setTimeout(redirectForStudy, 2000)

function redirectForStudy() {
    const search = window.location.search
    window.location.replace('/study' + search)
}
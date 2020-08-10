const acessListButton = document.querySelector('.study')
acessListButton.addEventListener('click', redirectForStudy)

setTimeout(redirectForStudy, 2000)

function redirectForStudy() {
    window.location.pathname = '/study'
}
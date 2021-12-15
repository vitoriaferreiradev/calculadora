const toggle = document.querySelector('.toggle').children
const lightThemeToogle = document.querySelector('.fa-sun')
const darkThemeToogle = document.querySelector('.fa-moon')
const container = document.querySelector('.container')

lightThemeToogle.onclick = () => {
    setActive(lightThemeToogle)
    container.classList.add('light-theme')
}
darkThemeToogle.onclick = () => {
    setActive(darkThemeToogle)
    container.classList.remove('light-theme')
}

function setActive(theme) {
    removeActive()
    theme.classList.add('active')
}

function removeActive() {
    for (let i = 0; i < toggle.length ; i++)
    {
        toggle[i].classList.remove('active')
    }
}
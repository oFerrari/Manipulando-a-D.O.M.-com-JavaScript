const darkModeClass = 'dark-mode'
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const darkMode = 'dark-mode'
const lightMode = 'light-mode'

function changeClasses() {
    button.classList.toggle(darkMode);
    h1.classList.toggle(darkMode);
    body.classList.toggle(darkMode);
    footer.classList.toggle(darkMode);
}

function changeText() {
    const light = "Light Mode"
    const dark = "Dark Mode"

    if (body.classList.contains(darkMode)) {
        button.innerHTML = light
        h1.innerHTML = dark + " ON"

        return
    }

    button.innerHTML = dark
    h1.innerHTML = light + " ON"
    //h1.textContent = "Light Mode ON"
}

button.addEventListener('click', () => {
    changeClasses();
    changeText()
})

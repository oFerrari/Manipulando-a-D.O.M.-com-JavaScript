function changeMode(){
    changeClasses();   
}

function changeClasses(){
    button.classList.toggle('darkModeClass');
    h1.classList.toggle('darkModeClass');
    body.classList.toggle('darkModeClass');
    footer.classList.toggle('darkModeClass');
}

function changeText(){
    if(button.classList.contains('darkModeClass')){
        button.innerHTML = "Light Mode"
    }
}

const darkModeClass = 'dark-mode'
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];


console.log(body)

button.addEventListener('click', changeMode)
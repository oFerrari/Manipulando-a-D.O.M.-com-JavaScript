/* function changeMode(){
    console.log("Cliquei");
} */

const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body');


console.log(body)

button.addEventListener('click', () => {
    console.log("Cliquei");
})
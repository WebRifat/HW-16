let button = document.querySelector('button');
let body = document.querySelector('body');
let light = document.querySelector('.light');


function DarkMode () {

    if (body.classList.toggle("darkmode")) {

    button.innerHTML = '<i class="bi bi-sun">';
    button.style.backgroundColor="rgba(255, 250, 1, 0.706)";
    light.innerHTML ='DarkMode'

    } else{
        button.innerHTML = '<i class="bi bi-moon">';
        button.style.backgroundColor="black";
        light.innerHTML = 'LightMode';
    }

}

button.addEventListener('click', DarkMode);












// custom mouse cursor


let cursor = document.querySelector('.cursor');
let cursorSm = document.querySelector('.cursor-sm');


function customMouseCursor (event) {

    let topValue = event.clientX;
    let leftValue = event.clientY;
    
    cursor.style.top = `${topValue}px`
    cursor.style.left = `${leftValue}px`
    cursorSm.style.top = `${topValue}px`
    cursorSm.style.left = `${leftValue}px`


}

window.addEventListener('mousemove', customMouseCursor)
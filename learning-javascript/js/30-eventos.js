'use strict'

//Eventos del ratón

window.addEventListener('load', () =>{

    function changeColor(){
        let boton = document.querySelector("#button");
        let background = boton.style.background;
        background = "red";
        boton.style.background = background;
        return true;
    }
    let boton = document.querySelector("#button");
    boton.addEventListener('click',() =>{
        changeColor();
    });
    boton.addEventListener('mouseover',() =>{
        boton.style.background = "#ccc";
    });
    boton.addEventListener('mouseout',() =>{
        boton.style.background = "black";
    });

    let input = document.querySelector('#nombre');
    input.addEventListener('focus', ()=>{
        console.log("Estas dentro del input");
    });
    input.addEventListener('blur', ()=>{
        console.log("Estas fuera del input");
    });
    input.addEventListener('keydown', (event) => {
        console.log(`Has pulsado la tecla ${String.fromCharCode(event.keyCode)}`);
    });
    input.addEventListener('keyup', (event) =>{
        console.log(`Has dejado de pulsar la tecla ${String.fromCharCode(event.keyCode)}`);
    })
    input.addEventListener('keypress', (event) => {
        console.log(`Presionas la tecla ${String.fromCharCode(event.keyCode)}`);
    });

});
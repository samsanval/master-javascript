'use strict'

window.addEventListener('load', () =>{
    //Timers
    function interval(){
        let time = setInterval(() =>{
            console.log("Temporizador");
            let header = document.querySelector("h1");
            if(header.style.fontSize == "50px"){
                header.style.fontSize = "20px";
            }
            else{
                header.style.fontSize = "50px";
            }
        }, 1000);
        return time;
    }
    let time = interval();
    let start = document.querySelector('#start');
    start.addEventListener('click', () =>{
        interval();
    });
    let stop = document.querySelector("#stop");
    stop.addEventListener('click',() =>{
        clearInterval(time);
    });
});
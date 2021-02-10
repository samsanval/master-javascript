'use strict'

// DOM

function changeColor(color){
    box.style.background = color;
}
//Conseguir elementos de un id concreto
let box = document.getElementById("box");
let boxQuery = document.querySelector('#box');
box.innerHTML = 'Texto mediante DOM';
changeColor("blue");
box.style.padding = "20px";
box.className = "hola";
console.log(box);
console.log(boxQuery);
//Conseguir elementos por su etiqueta
let allDivs = document.getElementsByTagName("div");
for(let element in allDivs) {
    if(allDivs[element].textContent != null && allDivs[element].textContent.length >= 1 ){
        let p =document.createElement("p");
        let text = document.createTextNode(allDivs[element].textContent);
        p.appendChild(text);
        document.querySelector("#seccion").appendChild(p);
    }
}
//Conseguir elementos por su clase
let redDivs = document.getElementsByClassName("red");
for (let element in redDivs){
    if(redDivs[element].className === "red"){
        redDivs[element].style.background = "red";
    }
}
console.log(redDivs);

let yellowDivs = document.getElementsByClassName("yellow");
for (let element in yellowDivs){
    if(yellowDivs[element].className === "yellow"){
        yellowDivs[element].style.background = "yellow";
    }
}

let redDivsQuery = document.querySelectorAll(".red");
console.log(redDivsQuery);
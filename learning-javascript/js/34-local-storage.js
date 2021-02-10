'use strict'

//Local Storage

if(typeof(Storage) !== 'undefined'){
    localStorage.setItem("titulo","curso js");
    let div=document.querySelector('#films');
    div.innerHTML = localStorage.getItem("titulo");
}

let usuario = {
    nombre: "samuel",
    email: "sam@gmail.com",
    web: "samuel@github.com"
}
localStorage.setItem("usuario",JSON.stringify(usuario));

let getUsuario = JSON.parse(localStorage.getItem("usuario"));
console.log(getUsuario);
document.querySelector('#films').append(" "+getUsuario.email);

localStorage.removeItem("usuario");
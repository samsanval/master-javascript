'use strict'
let usuarios = [];
getUsers()
.then( data => data.json())
.then(data => {
    listUsers(data);
});

function listUsers(usuarios){
    usuarios.forEach((element) => {
        let ul= document.querySelector('#list');
        let li = document.createElement("li");
        li.append(element.name+' '+element.email+' '+element.website);
        ul.append(li);
    })
    return getSecondUser()
        .then(data => data.json())
        .then(secondUser => {
            showUser(secondUser);
            return getInfo();
            }).then(data => {
                console.log(data);
            })
            .catch((error => {
                console.log(error);
            }));;

}

function getUsers(){
    return fetch('https://jsonplaceholder.typicode.com/users');
}
function getSecondUser(){
    return fetch('https://jsonplaceholder.typicode.com/users/2');

}
function showUser(usuario){
    let div = document.querySelector('#secondUser');
    div.innerHTML = usuario.name+' '+usuario.email;
}

function getInfo(){
    let profesor = {
        nombre: "samuel",
        apellidos: "sanchez",
        email: 'samuel@erasmusu.com'
    };
    return new Promise((resolve,reject) => {
        let profesorString= "Hola";
        setTimeout(()=>{
            profesorString = JSON.stringify(profesor);
        }, 3000);
        if(typeof(profesorString) != 'string' || profesorString.length == 0){
            return reject();
        }
        else{
            return resolve(profesorString);
        }
    })
}
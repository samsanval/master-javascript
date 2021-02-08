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
            });;

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
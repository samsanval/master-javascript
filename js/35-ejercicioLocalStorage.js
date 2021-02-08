'use strict'

let form = document.querySelector('#formFilms');
form.addEventListener('submit', () => {
    let title = document.querySelector('#addPelicula').value;
    if(title.length != 0){
        localStorage.setItem(title,title);
    }
} );
let formDelete = document.querySelector('#delete');
formDelete.addEventListener('submit',() => {
    let title = document.querySelector('#deleteFilm').value;
    if(title.length != 0){
        localStorage.removeItem(title);
    }

});
for(let i in localStorage){
    let element = localStorage[i];
    if(typeof(element) === 'string'){
        let li = document.createElement("li");
        li.append(element);
        let ul = document.querySelector('#list');
        ul.append(li);
    }
}
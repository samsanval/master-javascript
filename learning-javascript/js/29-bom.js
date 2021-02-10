'use strict'

console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.location);

function redirect(url){
    window.location.href = url;
}
function openWindow(url){
    window.open(url,"","width=400");
}
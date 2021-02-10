'use strict'

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let hour = date.getHours();
let textDate = `El año es ${year} del mes ${month} cuyo dia es ${day} a las ${hour}`;
console.log(textDate);

console.log(Math.ceil(Math.random()*100));
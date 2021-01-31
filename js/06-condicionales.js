'use strict'

let edad1 = 30;
let edad2 = 12;
if( edad1 > edad2){
    console.log('La primera edad es mayor');
}
else{
    console.log('La segunda edad es mayor');
}
/**
 * >, <, >=, <=
 * == Igual
 * != Distinto
 * && Y
 * || O
 * ! NOT
 */
let edad3 = 13;
let nombre = "Samuel Sanchez";
if(edad3 >= 10){
    console.log(edad3 + ' ' + nombre);
    if(edad3 <= 12){
        console.log(edad3+' tiene 11 años');
    }
    else if(edad3==13){
        console.log('Tienes 13 años');
    }
}
else{
    console.log("Aqui no ha pasado nada");
}

let edad4=11;
if(edad4 >= 10 && edad4 < 12){
    console.log('Tiene entre 10 y 12');
}
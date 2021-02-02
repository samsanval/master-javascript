'use strict'
//Tabla de multiplicar del numero introducido

let numero = parseInt(prompt('Introduzca el numero para sacar su tabla'));
if(!isNaN(numero)){
    for(let i = 1; i<=10; i++){
        console.log(numero * i);
    }
}
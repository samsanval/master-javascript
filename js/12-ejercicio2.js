'use strict'

//Utilizar un bucle para mostrar la suma y la media de numeros introducidos
//hasta meter un numero negativo

let suma = 0;
let media = 0;
let numeros = 0;

do{
    var numero = parseInt(prompt('Introduzca un numero'));
    if(isNaN(numero)){
        numero = 0;
    }
    else if(numero > 0){
        suma+=numero;
        numeros++;
        media = suma / numeros;
    }
} while(numero >=0);

console.log(suma + '  '+media);
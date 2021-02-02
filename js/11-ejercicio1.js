'use strict'

//Nos pide dos numeros y nos dice cual es mayor, el menor y si son iguales
//Si no son numeros o son menores o iguales a 0 no pida el numero

let numero1 = 0;
let numero2 = 0;
do{
    numero1 = parseInt(prompt("Introduzca el primer numero",0));
    numero2 = parseInt(prompt("Introduzca el segundo numero",0));

}while((numero1 <= 0 || numero2 <=0) || (isNaN(numero1) || isNaN(numero2) ));

if( numero1 > numero2){
    console.log('El primer numero es el mayor. El segundo es el menor');
}
else if (numero1 < numero2){
    console.log('El segundo numero es el mayor. El primero es el menor');

}
else{
    console.log('Los numeros son iguales');
}
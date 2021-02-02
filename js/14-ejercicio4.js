'use strict'
//Mostrar numeros impares entre dos numeros introducidos por el teclado

let numero1 = parseInt(prompt('Introduzca el primer numero '));
let numero2 = parseInt(prompt('Introduzca el segundo numero'));
if(!isNaN(numero1) && !isNaN(numero2)){
    if(numero1 > numero2){
        let numero3 = numero1;
        numero1 = numero2;
        numero2 = numero3;
    }
    for(let i = numero1; i<=numero2; i++){
        if(i % 2 != 0){
            document.write(i+' ');
        }
    }
}
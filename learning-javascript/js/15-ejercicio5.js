'use strict'

let numero = parseInt(prompt('Introduzca el numero'));
for(let i=0;i<=numero;i++){
    if(numero % i == 0){
        console.log(i);
    }
}
'use strict'


function printToConsole(numero1, numero2, mostrar=false){
    if(mostrar){
        console.log("Suma: "+(numero1+numero2));
        console.log("Resta: "+(numero1-numero2));
        console.log('Si soy yo');
    }
}
function printToScreen(numero1, numero2, mostrar=false){
    if(mostrar){
        document.write("Suma: "+(numero1+numero2));
        document.write("Resta: "+(numero1-numero2));
    }
}

function calculator(numero1=2, numero2=3, mostrar=false){
    printToConsole(numero1,numero2,mostrar);
    printToScreen(numero1,numero2,mostrar);
    return 'Hola soy la calculadora';
}
var calculator1 = calculator(10,15,true);
var calculator2 = calculator(100,12);
console.log(calculator1);
console.log(calculator2);
for(var i = 0; i< 10; i++){
    console.log(calculator());
}
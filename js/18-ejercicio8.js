'use strict'

//Calculadora. Pedir dos numeros por pantalla
//Mostrar en el cuerpo de la pagina , en una alerta y en la consola el resultado de las operaciones básicas
let numero1 = 0;
let numero2 = 0;
do{
    numero1 = parseInt(prompt("Introduzca el primer numero",0));
    numero2 = parseInt(prompt("Introduzca el segundo numero",0));

}while((numero1 <= 0 || numero2 <=0) || (isNaN(numero1) || isNaN(numero2)));

let resultado = 'La suma es '+(numero1+numero2)+', la resta es '+(numero1-numero2)+
', la multiplicacion es '+(numero1 * numero2)+ ', la division es '+(numero1 / numero2);
document.write('<p>'+resultado+'</p>');
console.log(resultado);
alert(resultado);
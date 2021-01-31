//Activar modo estricto
'use strict'

//var vs let
console.log('Variable mostrada con let '+texto);

//var Alcance global
//let Alcance dependiendo de su declaracion
var numero = 40;
console.log(numero); //40
if(true){
    var numero = 50;
    console.log(numero); //50
}
console.log(numero); //50
//let
var texto = "Curso JS";
console.log(texto);
if(true){
    let texto = "Curso JS dentro de un if";
    console.log(texto)
}
console.log(texto);

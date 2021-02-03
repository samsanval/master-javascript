'use strict'


//Anonymous function
let pelicula = function(nombre){
    return 'La pelicula es '+nombre;
}
//Callback function
function suma(numero1,numero2, sumAndShow, sumByTwo){
    sumAndShow(numero1+numero2);
    sumByTwo(numero1+numero2);
    return numero1+numero2;
}
suma(5,7, function(result){
    console.log('La suma es '+result)
},function(result){
    console.log('La suma por dos es '+result*2);
}
);
//Arrow function
let flecha = (nombre) =>{
    return 'La flecha es '+nombre;
}
suma(5,7, dato =>{
    console.log(dato);
},dato =>{
    console.log('La suma por dos es '+dato*2);
});
'use strict'

/**
 * 1. Pedir seis numeros por pantalla y meterlos en un array
 * 2. Mostrar el array en el cuerpo de la pagina y en la consola
 * 3. Sacar el array ordenado y mostrarlo
 * 4. Invertir su orden y mostrarlo
 * 5. Mostrar cuantos elementos tiene el array
 * 6. Buscar el numero introducido en el array y su posicion
 */

 let arrayNumeros = Array();
 for(let i = 0; i<6; i++){
     arrayNumeros.push(parseInt(prompt('Introduzca un numero')));
 }
 document.write(`<p>${arrayNumeros}</p>`);
 console.log(arrayNumeros);
 document.write(`<p>${arrayNumeros.sort((a,b) => a-b)}</p>`);
 document.write(`<p>${arrayNumeros.reverse()}</p>`);
 document.write(`<p>${arrayNumeros.length}</p>`);
 let numeroABuscar = parseInt(prompt('Diga el numero a buscar'));
 let encontrado = arrayNumeros.find(element => element === numeroABuscar);
 if(encontrado){
    document.write(`<p>Encontrado</p>`);

 }
 else{
    document.write(`<p>NO encontrado</p>`);

 }
 let posicion = arrayNumeros.findIndex(element => element === numeroABuscar);
 console.log(posicion);




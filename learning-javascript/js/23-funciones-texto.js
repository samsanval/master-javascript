'use strict'

//Transformacion de textos
let numero = 44;
let texto1 = '          Welcome to Learning JavaScript';
let texto2 = 'It\'s a good course';

console.log(numero.toString());
console.log(texto1.toUpperCase());
console.log(texto1.toLowerCase());
//Longitud
console.log(texto1.length);

let array= ['Hola','soy','un','array'];
console.log(array.length);

//Concatenar
console.log(texto1+' '+texto2);
console.log(texto1.concat(texto2));

//Metodos de busqueda y reemplazo
console.log(texto1.indexOf('JavaScript'));
console.log(texto1.lastIndexOf('JavaScript'));
console.log(texto1.search('JavaScript'));
console.log(texto1.match('JavaScript'));
console.log(texto1.substr(0,12));
console.log(texto1.charAt(11));
console.log(texto1.startsWith('Welcome'));
console.log(texto1.endsWith('JavaScript'));
console.log(texto1.includes('Welcome'));
console.log(texto1.replace('JavaScript','React'));
console.log(texto1.slice(1,10));
console.log(texto1.split(' '));
console.log(texto1.trim());
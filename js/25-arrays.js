'use strict'

let array = ['Prueba','Array','Datos', 42, true];
console.log(array);

let lenguajes = new Array("PHP",'JS','GO','Java','Python','C++');
/*console.log(lenguajes.length);
let elemento = parseInt(prompt('Que elemento del array quieres',0));
if(elemento >= lenguajes.length){
    alert('No es el numero correcto '+lenguajes.length);
}
else{
    alert(lenguajes[elemento]);
}*/
document.write('<h1>Lenguajes de programacion de 2021</h1>');
for(let i = 0; i < lenguajes.length; i++){
    document.write(`<h2>${lenguajes[i]}</h2>`);
}
lenguajes.forEach((element,index) => {
    document.write(`<p>${element}</p>`);
});
for(let lenguaje in lenguajes){
    document.write(`<p>${lenguajes[lenguaje]}</p>`);

}
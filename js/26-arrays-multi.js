'use strict'

let categorias = ['Accion','Comedia'];
let peliculas = ['La verdad duele','La vida de Bryan'];
let cine=[categorias,peliculas];
console.log(cine[0][1]);

peliculas.push('Batman');
console.log(peliculas);
//let newPelicula = prompt('Introduzca la nueva pelicula');
/*while(newPelicula != 'end'){
    peliculas.push(newPelicula);
    newPelicula = prompt('Introduzca la nueva pelicula');
}
console.log(peliculas);
peliculas[1] = undefined;
console.log(peliculas);
*/
let indice = peliculas.indexOf('La vida de Bryan');
if(indice > -1){
    peliculas.splice(indice,1);
}
console.log(peliculas)
console.log(peliculas.join());

let cadena = "Esto, es, un, texto";
let cadenaArray = cadena.split(',');
console.log(cadenaArray);
console.log(peliculas.sort());
console.log(peliculas.reverse());

for(let pelicula in peliculas){
    document.write(`<p>${peliculas[pelicula]}</p>`);

}
let search = peliculas.find(pelicula => pelicula === 'Batman');
let index = peliculas.findIndex(pelicula => pelicula === 'Batman');
console.log(search);
console.log(index);

let numeros = [10,12,345,12,4];
console.log(numeros.some( precio => precio >= 10));
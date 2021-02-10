'use strict'

//JSON

let pelicula = {
    titulo: 'Las niñas',
    año: 2020,
    pais: 'España'
}
let peliculas = [
    pelicula,
    {titulo: 'Akelarre',
    año: 2020,
    pais: 'España'}
];
console.log(peliculas);
peliculas.forEach((item) =>{
    document.write(item.titulo);
});
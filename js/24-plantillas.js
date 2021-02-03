'use strict'

let name = prompt('Introduzca su nombre');
let surname = prompt('Introduzca sus apellidos');

let texto = `
        <h1>Hola que tal</h1>
        <h3>Mi nombre es ${name} y me apellido ${surname} </h3>
`;
document.write(texto);
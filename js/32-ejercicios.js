'use strict'

/**
 * 1. Formulario con campos Nombre, Apellidos, y Edad
 * 2. Botón de Enviar Formulario (Event Submit)
 * 3. Mostrar datos por pantalla
 * 4. Tener un botón que al pulsar nos muestra los datos actuales del formulario
 */

 window.addEventListener('load', ()=>{
    let formDashed = document.querySelector('.dashed');
    console.log(formDashed.style);
    formDashed.style.display = "none";
    let form = document.querySelector('#formulario');
    form.addEventListener('submit',()=>{
        let nombre, apellidos, edad;
        nombre = document.querySelector('#nombre').value;
        if(nombre.trim() == null || nombre.trim().length == 0){
            console.log("Nombre");

            return false;
        }
        apellidos = document.querySelector('#apellidos').value;
        if(apellidos.trim() == null || apellidos.trim().length == 0){
            console.log("Apellidos");

            return false;
        }
        edad = document.querySelector('#edad').value;
        if(edad == null || parseInt(edad) <= 0){
            console.log("Edad", edad);
            return false;
        }
        let datos = [nombre, apellidos, edad];
        formDashed.style.display = "block";
        datos.forEach((item) =>{
            let parrafo = document.createElement("p");
            parrafo.append(item);
            formDashed.append(parrafo);
        });
    });
 });
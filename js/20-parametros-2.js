'use strict'

//Parametros rest y spread

function fruitList(fruta1, fruta2, ...all_fruits){
    console.log(fruta1);
    console.log(fruta2);
    console.log(all_fruits);
}
fruitList('Naranja','Fresa','Manzana','Tomate');
let fruits = ['Platano','Melocoton'];
fruitList(...fruits,'Naranja','Mango');
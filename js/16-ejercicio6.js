'use strict'

/**
 * Averiguar si un numero es par o impar
 * 1. Ventana
 * 2. si no es valido vuelve a pedirlo
 * 3. Mostrar si es par o impar
 */
let impar = parseInt(prompt('Introduzca un numero'));
while(isNaN(impar)){
    impar = parseInt(prompt('Introduzca un numero'));
}
if(impar % 2 == 0){
    alert('Par');
}
else{
    alert('Impar');
}
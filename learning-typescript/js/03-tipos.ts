//string
let cadena: string = 'Ejemplo de string';
console.log(cadena);
//number
let edad: number = 12;
console.log(edad);
//boolean
let isTrue : boolean = true;
console.log(isTrue);
//any
let cualquiera: any = 'hola';
console.log(cualquiera);
//array
let lenguajes: Array<string> = ["NodeJS","Angular","Express"];
console.log(lenguajes);

let years: number[] = [12,5,12];

//multiple type
let tipo: number | string;

//Definicion de tipos
type alphaNumerical = string | number;

let alphanum: alphaNumerical = 12312;
console.log(alphanum);

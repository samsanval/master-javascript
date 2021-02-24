import { Shirt } from "./Shirt";

class Main{
    constructor() {
        console.log('Ready');
        let redShirt = new Shirt('red', 'shirt', 'Adidas', 'XL', 13);
        console.log(redShirt.color);
    }
}
const main = new Main();
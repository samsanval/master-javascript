export class Shirt {
    constructor(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    setColor(color) {
        this._color = color;
    }
    getColor() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    set marca(value) {
        this._marca = value;
    }
    set talla(value) {
        this._talla = value;
    }
    set precio(value) {
        this._precio = value;
    }
    get precio() {
        return this._precio;
    }
    get talla() {
        return this._talla;
    }
    get marca() {
        return this._marca;
    }
    get modelo() {
        return this._modelo;
    }
    set modelo(value) {
        this._modelo = value;
    }
    get color() {
        return this._color;
    }
}

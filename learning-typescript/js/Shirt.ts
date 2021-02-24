interface ShirtBase {
    setColor(color: string);
    getColor(): string;
}
function stamp(logo: string){
    return function (target: Function){
        target.prototype.stamping = (): void => {
            console.log('Camiseta estampada con logo de '+logo);
        }
    }
}
export class Shirt implements ShirtBase{

    public setColor(color: string) {
        this._color = color;
    }
    public getColor() : string {
        return this._color;
    }

    public set color(value: string) {
        this._color = value;
    }
    public set marca(value: string) {
        this._marca = value;
    }
    public set talla(value: string) {
        this._talla = value;
    }
    public set precio(value: number) {
        this._precio = value;
    }
    public get precio(): number {
        return this._precio;
    }
    public get talla(): string {
        return this._talla;
    }
    public get marca(): string {
        return this._marca;
    }
    public get modelo(): string {
        return this._modelo;
    }

    public set modelo(value: string) {
        this._modelo = value;
    }
    public get color(): string {
        return this._color;
    }
    private _color: string;
    private _modelo: string;
    private _marca: string;
    private _talla: string;
    private _precio: number;

    constructor(color: string, modelo: string, marca: string, talla: string, precio:number) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }


}
class Sudadera extends Shirt {

    public get modelo(): string {
        return 'Sudadera';
    }
}
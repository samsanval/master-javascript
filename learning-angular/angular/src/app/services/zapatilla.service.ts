import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/Zapatilla";

@Injectable()
export class ZapatillaService{
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla('Reebok Classic',2,'Reebok','White',true),
      new Zapatilla('Jordan Air 1',40,'Nike','Black',false),
    ];
  }
  getShoes(): Array<Zapatilla>{
    return this.zapatillas;
  }
  getText(){
    return 'Hola mundo desde un servicio';
  }
}

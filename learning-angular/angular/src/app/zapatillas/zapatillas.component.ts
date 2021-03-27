import {Component, OnInit} from '@angular/core';
import { Zapatilla} from '../models/Zapatilla';
import { ZapatillaService } from "../services/zapatilla.service";


@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  providers: [ZapatillaService],
})
export class ZapatillasComponent implements  OnInit{

  public title: string;
  public zapatillas: Array<Zapatilla>;
  public marcas: Array<String>;
  public color: string;
  public miMarca: string;


  constructor(private _zapatillaService: ZapatillaService) {
    this.color = 'yellow';
    this.marcas = new Array<String>();
    this.miMarca = 'Fila';
  }

  ngOnInit() {
    this.zapatillas=this._zapatillaService.getShoes();
    this.brands();
  }
  brands()
  {
    this.zapatillas.forEach((zapatilla) => {
      if(this.marcas.indexOf(zapatilla.marca) < 0)
      {
        this.marcas.push(zapatilla.marca);
      }

    });
    console.log(this.marcas);
  }
  getMarca(){
    console.log(this.miMarca);
  }
  addMarca(){
    this.marcas.push(this.miMarca);
  }
  borrarMarca(index){
    this.marcas.splice(index, 1);
  }
  onBlur(){
    console.log('Has salido');
  }
  showWord(){
    alert(this.miMarca);
  }
}

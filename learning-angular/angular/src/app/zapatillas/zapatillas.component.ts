import {Component, OnInit} from '@angular/core';
import { Zapatilla} from '../models/Zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements  OnInit{

  public title: string;
  public zapatillas: Array<Zapatilla>;
  public marcas: Array<String>;
  public color: string;


  constructor() {
    this.zapatillas = [
      new Zapatilla('Reebok Classic',2,'Reebok','White',true),
      new Zapatilla('Jordan Air 1',40,'Nike','Black',false),
    ];
    this.color = 'yellow';
    this.marcas = new Array<String>();
  }

  ngOnInit() {
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
}

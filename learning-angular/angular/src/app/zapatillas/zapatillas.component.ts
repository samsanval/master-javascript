import { Component} from '@angular/core';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent{

  public title: string;
  constructor() {
    this.title = "Componente de zapatillas";
  }
}

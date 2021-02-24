import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{

  public title: string;
  public list: string;

  constructor() {
    this.title = "Componente de Videojuegos";
    this.list = "Listado de los juegos mas populares";
    console.log('Se ha cargado el nuevo componente');
  }
  ngOnInit() {
    console.log('onInit ejecutado');
  }

  ngDoCheck() {
    console.log('doCheck ejecutado');
  }
  ngOnDestroy() {
    console.log('Se destruye');
  }

  changeTitle(){
    this.title = 'Nuevo titulo del componente';
  }
}

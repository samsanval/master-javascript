import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Master de Angular';
  showVideogames: boolean = true;

  hideVideogames(value: boolean){
    this.showVideogames= value;
  }
}

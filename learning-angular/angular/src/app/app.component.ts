import { Component } from '@angular/core';
import { configuration} from './models/configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Master de Angular';
  showVideogames: boolean = true;
  config = configuration;

  constructor() {
    this.title=configuration.title;
  }
  hideVideogames(value: boolean){
    this.showVideogames= value;
  }
}

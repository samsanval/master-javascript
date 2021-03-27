import { Component, OnInit } from '@angular/core';
import { PeticionesService } from "../services/peticiones.service";

@Component({
  selector: 'app-extern',
  templateUrl: './extern.component.html',
  styleUrls: ['./extern.component.css'],
  providers: [PeticionesService],
})
export class ExternComponent implements OnInit {

  public user: any;
  public userId: any;
  public fecha: any;
  public newUser: any;
  constructor(private _peticionesHTTP: PeticionesService) {
    this.newUser= {
      'name': '',
      'job': '',
    };
  }

  ngOnInit() {
    this.userId = 1;
    this.fecha = new Date(2021, 5 ,20);
    this.loadUser();

  }
  loadUser(){
    this.user = false;
    this._peticionesHTTP.getUser(this.userId).subscribe(
      result => {
        this.user= result;
        console.log(this.user);
      },
      error => {
        console.log(<any>error);
      }
    );

  }
  onSubmit(form){
    this._peticionesHTTP.addUser(this.newUser).subscribe(
      response => {
        console.log(response);
        form.reset();
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

}

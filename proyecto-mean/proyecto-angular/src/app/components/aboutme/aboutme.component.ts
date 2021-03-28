import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;
  constructor() {
    this.title = 'Samuel';
    this.subtitle = 'Desarrollador';
    this.email = 'samsanchezalvarez@gmail.com';
  }

  ngOnInit() {
  }

}

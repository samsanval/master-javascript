import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { routing, appRoutingProvider } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import {ZapatillasComponent} from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import {HomeComponent} from "./home/home.component";
import { ExternComponent } from './extern/extern.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

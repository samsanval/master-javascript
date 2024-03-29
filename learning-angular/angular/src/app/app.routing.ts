//Importar modulos del router de Angular
import {ModuleWithProviders } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
//Importar componentes

import {ZapatillasComponent} from "./zapatillas/zapatillas.component";
import {VideojuegoComponent} from "./videojuego/videojuego.component";
import {CursosComponent} from "./cursos/cursos.component";
import {HomeComponent} from "./home/home.component";
import {ExternComponent} from "./extern/extern.component";
import {ContactoComponent} from "./contacto/contacto.component";
//Array Configuracion Rutas

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'zapatillas', component: ZapatillasComponent},
  {path:'videojuego', component:VideojuegoComponent},
  {path: 'cursos/:nombre/:followers', component:CursosComponent},
  {path: 'extern',component:ExternComponent},
  {path: 'contact',component:ContactoComponent},
  {path: '**', component: ZapatillasComponent}
];
export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

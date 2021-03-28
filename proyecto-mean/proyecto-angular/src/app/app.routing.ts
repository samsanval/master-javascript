import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from "./components/detail/detail.component";
import { EditComponent } from "./components/edit/edit.component";


const appRoutes : Routes = [
  {path: '',component:AboutmeComponent},
  {path: 'about-me', component: AboutmeComponent},
  {path: 'projects', component: ProjectComponent},
  {path: 'create-project', component: CreateComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'project/:id', component: DetailComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: '**', component: ErrorComponent}
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importamos los componentes


import { HomeComponent } from './pages/home/home.component';
import { NuestrosEspecialistasComponent } from './pages/nuestros-especialistas/nuestros-especialistas.component';
import { ValoracionComponent } from './pages/valoracion/valoracion.component';


const routes: Routes = [  
  {path: "", component:HomeComponent},
  {path: "valoracion", component:ValoracionComponent},
  {path: "especialistas", component:NuestrosEspecialistasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

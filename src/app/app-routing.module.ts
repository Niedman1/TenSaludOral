import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importamos los componentes
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NuestrosEspecialistasComponent } from './pages/nuestros-especialistas/nuestros-especialistas.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { ValoracionComponent } from './pages/valoracion/valoracion.component';


const routes: Routes = [  
  {path: "", component:HomeComponent},
  {path: "valoracion", component:ValoracionComponent},
  {path: "especialistas", component:NuestrosEspecialistasComponent},
  {path: "login", component:LoginComponent},
  {path: "registrar", component:RegistrarComponent},
  {path: "perfilUsuario", component:PerfilUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

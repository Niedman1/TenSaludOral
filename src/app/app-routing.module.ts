import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importamos los componentes
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NuestrosEspecialistasComponent } from './pages/nuestros-especialistas/nuestros-especialistas.component';
import { PerfilAdministradorComponent } from './pages/perfil-administrador/perfil-administrador.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { ValoracionComponent } from './pages/valoracion/valoracion.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { TratamientosComponent } from './pages/tratamientos/tratamientos.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { EspecialidadesComponent } from './pages/especialidades/especialidades.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';



const routes: Routes = [  
  {path: "home", component:HomeComponent},
  {path: "valoracion", component:ValoracionComponent},
  {path: "especialistas", component:NuestrosEspecialistasComponent},
  {path: "login", component:LoginComponent},
  {path: "registrar", component:RegistrarComponent},
  {path: "perfilUsuario", component:PerfilUsuarioComponent},
  {path: "perfilAdmin", component:PerfilAdministradorComponent},
  {path: "agenda", component:AgendaComponent},
  {path: "tratamientos", component:TratamientosComponent},
  {path: "medicos", component:MedicosComponent},
  {path: "especialidades", component:EspecialidadesComponent},
  {path: "usuario", component:UsuarioComponent},
  {path:  '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { ComponentsModule } from '../components/components.module';
import { ValoracionComponent } from './valoracion/valoracion.component';
import { NuestrosEspecialistasComponent } from './nuestros-especialistas/nuestros-especialistas.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { LoginComponent } from './login/login.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { PerfilAdministradorComponent } from './perfil-administrador/perfil-administrador.component';

@NgModule({
  declarations: [
    HomeComponent,
    ValoracionComponent,
    NuestrosEspecialistasComponent,
    RegistrarComponent,
    LoginComponent,
    PerfilUsuarioComponent,
    PerfilAdministradorComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }

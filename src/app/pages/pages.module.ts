import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';
import { ValoracionComponent } from './valoracion/valoracion.component';
import { NuestrosEspecialistasComponent } from './nuestros-especialistas/nuestros-especialistas.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { LoginComponent } from './login/login.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { PerfilAdministradorComponent } from './perfil-administrador/perfil-administrador.component';
import { AgendaComponent } from './agenda/agenda.component';
import { TratamientosComponent } from './tratamientos/tratamientos.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { MedicosComponent } from './medicos/medicos.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    HomeComponent,
    ValoracionComponent,
    NuestrosEspecialistasComponent,
    RegistrarComponent,
    LoginComponent,
    PerfilUsuarioComponent,
    PerfilAdministradorComponent,
    AgendaComponent,
    TratamientosComponent,
    EspecialidadesComponent,
    MedicosComponent,
    UsuarioComponent,
    
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class PagesModule { }

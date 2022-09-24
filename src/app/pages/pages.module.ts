import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { ComponentsModule } from '../components/components.module';
import { ValoracionComponent } from './valoracion/valoracion.component';
import { NuestrosEspecialistasComponent } from './nuestros-especialistas/nuestros-especialistas.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    HomeComponent,
    ValoracionComponent,
    NuestrosEspecialistasComponent,
    RegistrarComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }

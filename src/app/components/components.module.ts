import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { EspecialistasComponent } from './especialistas/especialistas.component';
import { AlianzasComponent } from './alianzas/alianzas.component';
import { ComoLlegarComponent } from './como-llegar/como-llegar.component';
import { FooterComponent } from './footer/footer.component';
import { EspecialistasHistoriaComponent } from './especialistas-historia/especialistas-historia.component';




@NgModule({
  declarations: [
    NavBarComponent,
    CarruselComponent, 
    ServiciosComponent, 
    EspecialistasComponent, 
    AlianzasComponent, 
    ComoLlegarComponent, 
    FooterComponent, 
    EspecialistasHistoriaComponent,
    
    ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    CarruselComponent,
    ServiciosComponent,
    EspecialistasComponent,
    AlianzasComponent,
    ComoLlegarComponent,
    FooterComponent,
    EspecialistasHistoriaComponent,
       
  ]
})
export class ComponentsModule { }

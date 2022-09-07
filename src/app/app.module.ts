import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EspecialistasComponent } from './components/especialistas/especialistas.component';
import { AlianzasComponent } from './components/alianzas/alianzas.component';
import { ComoLlegarComponent } from './components/como-llegar/como-llegar.component';
import { RedesComponent } from './components/redes/redes.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarruselComponent,
    ServiciosComponent,
    EspecialistasComponent,
    AlianzasComponent,
    ComoLlegarComponent,
    RedesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

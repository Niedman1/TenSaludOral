import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MostrarBotonService {

  boton1 : boolean;
  
  constructor() { }

  public getBoton(){
    return this.boton1;
  }

  public setBoton(cambio: boolean){
    this.boton1 = cambio;
  }
  
}

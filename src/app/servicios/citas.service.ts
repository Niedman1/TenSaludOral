
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita} from '../pages/modelo/cita';
import { HttpClientModule} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CitasService {


  private API_SERVER = 'http://localhost:8080/citas/';

  constructor(private httpClient: HttpClient
    ){ }

    public getAllCitas() {
      return this.httpClient.get<Cita[]>(this.API_SERVER);
    }
  
    public saveCitas(cita: any): Observable<any> {
      return this.httpClient.post(this.API_SERVER, cita);
    }
  
    public deleteCitas(id: string, eventoAgendaId: string): Observable<any> {
      return this.httpClient.delete(this.API_SERVER + id + '/' + eventoAgendaId);
    }

    public updateCitas(eventoAgendaId: string, cita: any): Observable<any> {
      return this.httpClient.put(this.API_SERVER + eventoAgendaId, cita);
    }

    public getCitasByCedula(cita: any): Observable<any> {
      return this.httpClient.post(this.API_SERVER, cita.cedula);
    }

  }


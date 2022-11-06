import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DoctoresService {

  private API_SERVER = "http://localhost:8080/doctores/"

  constructor(
    private httpClient : HttpClient
  ) { }

  private getAllDoctores(): Observable<any>{
    return this.httpClient.get(this.API_SERVER)
  }

}

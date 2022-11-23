import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private API_SERVER = 'http://localhost:8080/usuario/';

  constructor(private httpClient: HttpClient) {}

  public getAllUsuarios(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public saveUsuario(usuario: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, usuario);
  }

  public deleteUsuario(id: string): Observable<any>{
    return this.httpClient.delete(this.API_SERVER + 'delete/' + id  );
  }
}

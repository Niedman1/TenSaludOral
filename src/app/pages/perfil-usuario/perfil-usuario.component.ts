import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent implements OnInit {

  public objetounico:any;
  public nombre : string;
  

  constructor() { }

  ngOnInit(): void {
    let token = sessionStorage.getItem("token") as string;
    this.objetounico = this.decodificarJwt(token);
    console.log("mi objeto", this.objetounico);
    this.nombre = this.objetounico.name;
    sessionStorage.setItem("nombre", this.objetounico.name);
    sessionStorage.setItem("correo", this.objetounico.email);
  }

  private decodificarJwt(token:string):any
  {
    var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
  }

  agendar(){
    document.location.href = "/agenda";
  }

  tratamientos(){
    document.location.href = "/tratamientos";
  }

}

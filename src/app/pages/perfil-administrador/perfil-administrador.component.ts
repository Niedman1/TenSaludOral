import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-administrador',
  templateUrl: './perfil-administrador.component.html',
  styleUrls: ['./perfil-administrador.component.scss']
})
export class PerfilAdministradorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  agendar(){
    document.location.href = "/agenda";
  }

  tratamientos(){
    document.location.href = "/tratamientos";
  }

  usuarios(){
    document.location.href = "/usuario";
  }

  especialidades(){
    document.location.href = "/especialidades";
  }

  especialistas(){
    document.location.href = "/medicos";
  }

  

}

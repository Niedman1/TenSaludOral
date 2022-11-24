import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UsuarioService } from './../../servicios/usuario.service';
import { Router } from '@angular/router';
declare var google:any;

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent implements OnInit {

  usuarioForm: FormGroup;
  usuario: any;

  constructor(public fb: FormBuilder, public Usuario: UsuarioService, private routerNav: Router) {}

  ngOnInit(): void {

    this.usuarioForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      contra: ['', Validators.required],
      cedula: ['', Validators.required],
    }); 
  }

guardar(): void {
this.Usuario.saveUsuario(this.usuarioForm.value).subscribe(Response => {
  this.usuarioForm.reset();
  document.location.href = "/perfilUsuario";
},
error => {console.error(error)}
)}   
 

}
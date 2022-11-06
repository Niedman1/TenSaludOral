import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UsuarioService } from './../../servicios/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent implements OnInit {

  usuarioForm: FormGroup;

  constructor(public fb: FormBuilder, public Usuario: UsuarioService) {}

 

  ngOnInit(): void {

    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      contra: ['', Validators.required],
      cedula: ['', Validators.required],
    })


  }

  guardar(): void {
this.Usuario.saveUsuario(this.usuarioForm.value).subscribe(Response => {

},
error => {console.error(error)}
)}
    

 
}

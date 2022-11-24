import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  usuario: any;

  constructor(public fb: FormBuilder, public Usuario: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      contra: ['', Validators.required],
      cedula: ['', Validators.required],
    });

    this.Usuario.getAllUsuarios().subscribe(
      (Response) => {
        this.usuario = Response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  guardar(): void {
    this.Usuario.saveUsuario(this.usuarioForm.value).subscribe(
      (Response) => {
        this.usuarioForm.reset();
        this.usuario = this.usuario.filter(
          (usuario) => Response.id != usuario.id
        );
        this.usuario.push(Response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  eliminar(usuario) {
    this.Usuario.deleteUsuario(usuario.id).subscribe(
      (Response) => {
        //console.log(Response)
        if (Response === true) {
          this.usuario.pop(usuario);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  editar(usuario) {
    this.usuarioForm.setValue({
      id: usuario.id,
      nombre: usuario.nombre,
      apellidos: usuario.apellidos,
      correo: usuario.correo,
      contra: usuario.contra,
      cedula: usuario.cedula,
    });
  }

  volver (){
    document.location.href = "/perfilAdmin";
  }
}

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
export class RegistrarComponent implements OnInit, AfterViewInit {

  usuarioForm: FormGroup;
  usuario: any;

  constructor(public fb: FormBuilder, public Usuario: UsuarioService, private routerNav: Router) {}


  ngAfterViewInit(): void {
    google.accounts.id.initialize({
      client_id: "293498881470-338nafpcj0kno3k1flnfsehn49mak51j.apps.googleusercontent.com",
      callback: this.handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }

 

  ngOnInit(): void {

    this.usuarioForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      contra: ['', Validators.required],
      cedula: ['', Validators.required],
    });

    this.Usuario.getAllUsuarios().subscribe(Response => {
      this.usuario= Response
    },
    error => {console.error(error)}
    );  

  }

  handleCredentialResponse(response){
    console.log(response);
    if (response.credential) {
      //this.router.navigate(['/home'])
      //this.routerNav.navigateByUrl("/home");
      document.location.href = "/login";
    }
  }

  guardar(): void {
this.Usuario.saveUsuario(this.usuarioForm.value).subscribe(Response => {
  this.usuarioForm.reset();
  this.usuario=this.usuario.filter(usuario=>Response.id!=usuario.id)
  this.usuario.push(Response);
},
error => {console.error(error)}
)}   
 
eliminar (usuario){
  this.Usuario.deleteUsuario( usuario.id ).subscribe(Response => {
    //console.log(Response)
    if(Response===true){
      this.usuario.pop(usuario);

    }

  },
  error => {console.error(error)}
  )}   


  editar(usuario){
    this.usuarioForm.setValue ({
      id: usuario.id,
      nombre: usuario.nombre ,
      apellidos: usuario.apellidos ,
      correo: usuario.correo ,
      contra: usuario.contra ,
      cedula: usuario.cedula ,
    });
  }

}
import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var google:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements  OnInit, AfterViewInit {

  constructor() { }

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

  handleCredentialResponse(response: any){
 
    if (response.credential) {
      //this.router.navigate(['/home'])
      //this.routerNav.navigateByUrl("/home");
      

      sessionStorage.setItem("token",response.credential);
      document.location.href = "/perfilUsuario";
    }
  }

  ngOnInit(): void {
  }

}

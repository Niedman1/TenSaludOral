import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.scss'],
})
export class EspecialidadesComponent implements OnInit {
  servicioForm: FormGroup;
  servicio: any;

  constructor(public fb: FormBuilder, public Servicio: ServiciosService) {}

  ngOnInit(): void {
    this.servicioForm = this.fb.group({
      id: [''],
      tipoServicio: ['', Validators.required],
    });

    this.Servicio.getAllServicios().subscribe(
      (Response) => {
        this.servicio = Response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  guardar(): void {
    let va = this.servicioForm.value
    console.log(va)
    this.Servicio.saveServicios(va).subscribe(
      (Response) => {
        this.servicioForm.reset();
        this.servicio = this.servicio.filter(
          (servicio) => Response.id != servicio.id
        );
        this.servicio.push(Response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  eliminar(servicio) {
    this.Servicio.deleteServicios(servicio.id).subscribe(
      (Response) => {
        //console.log(Response)
        if (Response === true) {
          this.servicio.pop(servicio);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  editar(servicio) {
    this.servicioForm.setValue({
      id: servicio.id,
      nombre: servicio.tipoServicio,
    });
  }

  volver() {
    document.location.href = '/perfilAdmin';
  }
}

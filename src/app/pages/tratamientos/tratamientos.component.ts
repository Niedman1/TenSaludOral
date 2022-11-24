import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CitasService } from '../../servicios/citas.service';
import { Router } from '@angular/router';
import { Cita } from '../modelo/cita';
import { MostrarBotonService } from '../../servicios/mostrar-boton.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tratamientos',
  templateUrl: './tratamientos.component.html',
  template: `<button type="button" class="btn btn-outline-success " (click)="actualizarAgenda(item)"  ><i class="fa-regular fa-pen-to-square"></i></button>`,
  styleUrls: ['./tratamientos.component.scss'],
})
export class TratamientosComponent implements OnInit {
  cita: Cita[] = [];
  tratamientosForm: FormGroup;
  @Output() mostrarBoton = new EventEmitter<boolean>();
  @Input() mostrarId: number;
  constructor(
    private fb: FormBuilder,
    public Citas: CitasService,
    private routerNav: Router,
    private MostrarBotonService: MostrarBotonService
  ) {}

  ngOnInit(): void {
    this.getCitas();
    this.crearFormulario();
  }

  crearFormulario() {
    this.tratamientosForm = this.fb.group({

      cedula : ['', Validators.required] ,
    });
  }

  getCitas() {
    this.Citas.getAllCitas().subscribe(
      (Response) => {
        console.log(Response);
        this.cita = Response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  eliminar(cita) {
    this.Citas.deleteCitas(cita.id, cita.eventoAgendaId).subscribe(
      (Response) => {
        //console.log(Response)
        if (Response) {
          window.location.reload();
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  actualizarAgenda(cita) {
    // localStorage.setItem('ocultar', 'true');
    sessionStorage.setItem('evento', cita.eventoAgendaId);
    sessionStorage.setItem('id', cita.id);
    this.mostrarBoton.emit(false);
    document.location.href = '/agenda';
  }

  getCitasByCedula(cita) {
    console.log('esta es la cita ' + cita)
    this.Citas.getCitasByCedula(cita).subscribe(
      (Response) => {
        //console.log(Response)
        if (Response) {
          window.location.reload();
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

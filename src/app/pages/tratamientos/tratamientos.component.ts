import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CitasService } from './../../servicios/citas.service';
import { Router } from '@angular/router';
import { Cita } from '../modelo/cita';
import { MostrarBotonService } from './../../servicios/mostrar-boton.service';

@Component({
  selector: 'app-tratamientos',
  templateUrl: './tratamientos.component.html',
  styleUrls: ['./tratamientos.component.scss'],
})
export class TratamientosComponent implements OnInit {
  cita: Cita[] = [];
  @Output() mostrarButton = new EventEmitter<boolean>();

  constructor(
    public Citas: CitasService,
    private routerNav: Router,
    private MostrarBotonService: MostrarBotonService
  ) {}

  ngOnInit(): void {
    this.getCitas();
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

  actualizarAgenda() {
    localStorage.setItem('ocultar', 'false');
    document.location.href = '/agenda';
  }

  getCitasByCedula(cita) {
    this.Citas.getCitasByCedula(cita.cedula).subscribe(
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

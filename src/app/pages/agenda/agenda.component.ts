import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiciosService } from './../../servicios/servicios.service';
import { DoctoresService } from './../../servicios/doctores.service';
import { CitasService } from './../../servicios/citas.service';
import { MostrarBotonService } from './../../servicios/mostrar-boton.service';
import { Cita } from "../modelo/cita"
import { ThisReceiver } from '@angular/compiler';
import { ComoLlegarComponent } from 'src/app/components/como-llegar/como-llegar.component';
import { ResolveStart } from '@angular/router';

declare var esconderboton:Boolean;
@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {
  agendaForm: FormGroup;
  modeloCita: Cita;
  idEdit: number;
  mostrar: any = "true";
  mostrar2: boolean ;
  nombreUsuario: any;
  correo: any;
  servicios: any;
  medicos: any;
  date: Date = new Date();
  mes = this.date.getMonth() + 1;
  fechaC =
    this.date.getFullYear() +
    '-' +
    this.mes +
    '-' +
    this.date.getDate() +
    'T' +
    this.date.getHours() +
    ':' +
    this.date.getMinutes();

  fechaMin: string = this.fechaC;
  //fechaMin: string = '2022-11-20T00:00';

  constructor(
    private fb: FormBuilder,
    public serviciosService: ServiciosService,
    public doctoresService: DoctoresService,
    public citasService: CitasService,
    public mostrarService : MostrarBotonService,
  ) {}

  ngOnInit(): void {
    this.mostrar2 = true;
    this.nombreUsuario = sessionStorage.getItem('nombre');
    this.correo = sessionStorage.getItem('correo');
    this.crearFormulario();

    this.serviciosService.getAllServicios().subscribe(
      (Response) => {
        this.servicios = Response;
      },
      (error) => {
        console.error(error);
      }
    );

    this.agendaForm.get('servicio')?.valueChanges.subscribe(value=>{
      this.doctoresService
      .getAllDoctoresByEspecialidad(value.id)
      .subscribe(
        (Response) => {
          this.medicos = Response;
        },
        (error) => {
          console.error(error);
        }
      );


    })
    
  }

 
  crearFormulario() {
    this.agendaForm = this.fb.group({
      nombre: [this.nombreUsuario, ],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      correo: [this.correo, Validators.required],
      medico: ['', Validators.required],
      cedula : ['', Validators.required] ,
      servicio: ['', Validators.required],
      eventoAgendaId : [''],
       // FORMATO FECHA "2022-11-15T05:00:00-05:00"
    });
  }

  guardar(): void {
    console.log('Esta es Fecha Inicio ' + this.agendaForm.value.fechaInicio)
    console.log('Esta es Fecha Fin ' + this.agendaForm.value.fechaFin)
    this.citasService.saveCitas(this.agendaForm.value).subscribe(Response => {
      window.location.reload();
    },
    error => {console.error(error)}
    )
   
  }

  
}

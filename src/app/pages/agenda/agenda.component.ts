import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ServiciosService } from './../../servicios/servicios.service';
import { DoctoresService } from './../../servicios/doctores.service';
import { CitasService } from './../../servicios/citas.service';
import { MostrarBotonService } from './../../servicios/mostrar-boton.service';
import { ThisReceiver } from '@angular/compiler';

declare var esconderboton:Boolean;
@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {
  agendaForm: FormGroup;
  mostrar: any = 'true';
  mostrar2: any;
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
    public MostrarBotonService : MostrarBotonService,
  ) {}

  ngOnInit(): void {
    this.nombreUsuario = sessionStorage.getItem('nombre');
    this.correo = sessionStorage.getItem('correo');
    this.agendaForm = this.fb.group({
      nombre: ['', ],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      correo: ['', Validators.required],
      medico: ['', Validators.required],
      cedula : ['', Validators.required] ,
      servicio: ['', Validators.required],
      eventoAgendaId : [''],
       // FORMATO FECHA "2022-11-15T05:00:00-05:00"
    });

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

    this.mostrar  = localStorage.getItem('ocultar') 
  }

 
  crearFormulario() {
    this.agendaForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      servicio: ['', Validators.required],
      medico: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      cedula: ['', Validators.required],
      eventoAgendaId : [''],
    });
  }

  guardar(): void {

    this.citasService.saveCitas(this.agendaForm.value).subscribe(Response => {

    },
    error => {console.error(error)}
    )
   
  }

  actualizar (cita) {
    
    this.citasService.updateCitas(cita.eventoAgendaId, cita).subscribe(Response => {
      //console.log(Response)
      if(Response){
        window.location.reload();
      }
    },
    error => {console.error(error)}
    )} 

    

    
 
}

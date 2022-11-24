import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctoresService } from 'src/app/servicios/doctores.service';
import { Medico } from '../modelo/medico';
@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {

medico : Medico[] = []
medicoForm: FormGroup;
medicos: any;

  constructor(public fb: FormBuilder,
    public Medico: DoctoresService,
  ) { }

  ngOnInit(): void {

    this.medicoForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      servicio: ['', Validators.required],

    });

    this.Medico.getAllDoctores().subscribe(Response => {
      this.medicos= Response
    },
    error => {console.error(error)}
    );  


  }

  getMedicos() {
    this.Medico.getAllDoctores().subscribe(
      (Response) => {
        console.log(Response);
        this.medico = Response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  guardar(): void {
    this.Medico.saveDoctores(this.medicoForm.value).subscribe(Response => {
      this.medicoForm.reset();
      this.medicos=this.medicos.filter(medicos=>Response.id!=medicos.id)
      this.medicos.push(Response);
    },
    error => {console.error(error)}
    )}  

  eliminar (medicos){
    this.Medico.deleteDoctores( medicos.id ).subscribe(Response => {
      //console.log(Response)
      if(Response===true){
        this.medicos.pop(medicos);
  
      }
  
    },
    error => {console.error(error)}
    )}   
  
  
    editar(medicos){
      this.medicoForm.setValue ({
        id: medicos.id,
        nombre: medicos.nombre,
        apellido: medicos.apellido,
        servicio: medicos.servicio,

      });
    }
    
    volver (){
      document.location.href = "/perfilAdmin";
    }
}

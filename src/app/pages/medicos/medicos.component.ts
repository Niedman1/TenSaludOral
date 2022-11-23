import { Component, OnInit } from '@angular/core';
import { DoctoresService } from 'src/app/servicios/doctores.service';
import { Medico } from '../modelo/medico';
@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {

medico : Medico[] = []

  constructor(
    public Medico: DoctoresService,
  ) { }

  ngOnInit(): void {
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

}

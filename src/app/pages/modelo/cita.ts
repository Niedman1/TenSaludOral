import {Medico} from '../modelo/medico';
import {Servicios} from '../modelo/servicios';
export interface Cita{
    id?:'',
    cedula:'',
    correo:'',
    fechaInicio:'',
    fechaFin:'',
    medico : Medico,
    servicio : Servicios,
    usuario:'',
    eventoAgendaId:'',
}
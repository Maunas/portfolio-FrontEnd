import { Injectable } from '@angular/core';
import { Contacto, Experiencia, Formacion, Habilidad, Persona, Proyecto, Usuario } from '../interfaces';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private fechas: DateService) { }

  validarLogin(usuario: Usuario): boolean{
    if(usuario.username === (null || '')){
      alert('El nombre de usuario es obligatorio.');
      return false;
    }
    if(usuario.password  === (null || '')){
      alert('La contraseña es obligatoria.');
      return false;
    }
    return true;
  }

  validarContacto(contacto: Contacto): boolean{
    if(contacto.nombreContacto === (null || '')){
      alert('El nombre del medio de comunicación es obligatorio.');
      return false;
    }
    if(contacto.urlContacto  === (null || '')){
      alert('El enlace al medio de comunicación es obligatorio.');
      return false;
    }
    return true;
  }

  validarExperiencia(experiencia: Experiencia): boolean{
    if(experiencia.puesto === (null || '')){
      alert('El puesto ejercido es obligatorio.');
      return false;
    }
    if(experiencia.institucion  === (null || '')){
      alert('La institución es obligatoria.');
      return false;
    }
    if(experiencia.fechaDesde  === (null || undefined)){
      alert('La fecha de inicio es obligatoria.');
      return false;
    }
    if( this.fechas.posteriorAHoy(experiencia.fechaDesde) || (experiencia.fechaHasta !== (null || undefined) && this.fechas.posteriorAHoy(experiencia.fechaHasta))){
      alert('Las fechas no pueden ser posteriores al dia de hoy.');
      return false;
    }
        if((experiencia.fechaHasta !== (null || undefined) && this.fechas.posterior(experiencia.fechaDesde, experiencia.fechaHasta))){
      alert('La fecha de inicio no puede ser posterior a la fecha de fin.');
      return false;
    }
    return true;
  }

  validarFormacion(formacion: Formacion): boolean{
    if(formacion.carrera === (null || '')){
      alert('La carrera estudiada es obligatoria.');
      return false;
    }
    if(formacion.institucion  === (null || '')){
      alert('La institución es obligatoria.');
      return false;
    }
    if( (formacion.fechaFin !== (null || undefined) && this.fechas.posteriorAHoy(formacion.fechaFin))){
      alert('Las fecha no puede ser posterior al dia de hoy.');
      return false;
    }
    return true;
  }

  validarPersona(persona: Persona): boolean{
    if(persona.nombreCompleto === (null || '')){
      alert('El nombre es obligatorio.');
      return false;
    }
    if(persona.descripcion  === (null || '')){
      alert('La descripción es obligatoria.');
      return false;
    }
    if(persona.profesion  === (null || '')){
      alert('La profesión es obligatoria.');
      return false;
    }
    if(persona.nacimiento === (null || undefined)){
      alert('Las fecha de nacimiento es obligatoria.');
      return false;
    }
    if((this.fechas.posteriorAHoy(persona.nacimiento))){
      alert('Las fecha de nacimiento no puede ser posterior al dia de hoy.');
      return false;
    }
    return true;
  }

  validarProyecto(proyecto: Proyecto): boolean{
    if(proyecto.tituloProyecto === (null || '')){
      alert('El título del proyecto es obligatorio.');
      return false;
    }
    if(proyecto.descripcion  === (null || '')){
      alert('La descripción es obligatoria.');
      return false;
    }
    return true;
  }

  validarHabilidad(skill: Habilidad): boolean{
    if(skill.nombreHabilidad === (null || '')){
      alert('El nombre de la habilidad es obligatorio.');
      return false;
    }
    if(skill.tipoSkill  === (null || '')){
      alert('El tipo de skill es obligatoria.');
      return false;
    }
    if(skill.nivelHabilidad < 0){
      alert('El nivel de habilidad no puede ser negativo.');
      return false;
    }
    if(skill.valorMax <= 0){
      alert('El nivel máximo debe ser positivo.');
      return false;
    }
    if(skill.nivelHabilidad > skill.valorMax){
      alert('El nivel de habilidad no puede ser mayor al máximo.');
      return false;
    }
    return true;
  }
}

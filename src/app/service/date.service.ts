import { Injectable } from '@angular/core';
import {
  differenceInYears,
  format,
  fromUnixTime,
  isAfter,
  milliseconds,
  parse,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { Portfolio } from '../interfaces';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor() {}

  convertirAUTC(date: Date): Date {
    return utcToZonedTime(new Date(date), 'UTC');
  }

  formatearAFormulario(date: Date){
    return format(date,'yyyy-MM-dd');
  }

  calcularEdad(nacimiento: Date): number {
    return differenceInYears(new Date(), new Date(nacimiento));
  }

  posterior(posterior: Date, anterior: Date): boolean {
    return isAfter(new Date(posterior), new Date(anterior));
  }

  posteriorAHoy(posterior: Date): boolean {
    return this.posterior(new Date(posterior), new Date());
  }
  formatearFecha(fechaUnix: Date):Date {
    return this.convertirAUTC(fechaUnix);
  }

  formatearFechasPortfolio(portfolio: Portfolio): Portfolio {
    portfolio.persona.nacimiento = this.formatearFecha(
      portfolio.persona.nacimiento
    );
    portfolio.experiencia = portfolio.experiencia.map((experiencia) => {
      experiencia.fechaDesde = this.formatearFecha(experiencia.fechaDesde);
      return experiencia;
    });
    portfolio.experiencia = portfolio.experiencia.map((experiencia) => {
      if (experiencia.fechaHasta) {
        experiencia.fechaHasta = this.formatearFecha(experiencia.fechaHasta);
      }
      return experiencia;
    });
    portfolio.formacion = portfolio.formacion.map((formacion) => {
      if (formacion.fechaFin) {
        formacion.fechaFin = this.formatearFecha(formacion.fechaFin);
      }
      return formacion;
    });
    return portfolio;
  }
}

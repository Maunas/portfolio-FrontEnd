export interface Contacto{
    id: number;
    nombreContacto: string;
    enlaceContacto: string;
}
export interface Persona{
    idPersona: number;
    nombreCompleto: string;
    nacimiento: Date;
    profesion: string;
    descripcion: string;
    urlFoto: string;
    urlBanner: string;
}
export interface Experiencia{
    idExperiencia: number;
    puesto: string;
    institucion: string;
    urlImagen?: string;
    fechaDesde: Date;
    fechaHasta: Date;
}
export interface Portfolio{
    persona: Persona;
    experiencia: Experiencia[];
    contacto: Contacto[];
}
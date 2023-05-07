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
export interface Portfolio{
    persona: Persona;
}
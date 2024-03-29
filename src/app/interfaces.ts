export interface Contacto{
    id?: number;
    nombreContacto: string;
    urlContacto: string;
}
export interface Persona{
    idPersona?: number;
    nombreCompleto: string;
    nacimiento: Date;
    profesion: string;
    descripcion: string;
    urlFoto: string;
    urlBanner: string;
}
export interface Experiencia{
    idExperiencia?: number;
    puesto: string;
    institucion: string;
    urlImagen?: string;
    fechaDesde: Date;
    fechaHasta?: Date;
}
export interface Formacion{
    idFormacion?: number;
    institucion: string;
    carrera: string;
    urlImagen?: string;
    fechaFin?: Date;
}
export interface Proyecto{
    idProyecto?: number;
    tituloProyecto: string;
    urlProyecto?: string;
    descripcion: string;
}
export interface Habilidad{
    idHabilidad?: number;
    nombreHabilidad: string;
    valorMax: number;
    nivelHabilidad: number;
    tipoSkill: string;
}
export interface Portfolio{
    persona: Persona;
    experiencia: Experiencia[];
    formacion: Formacion[];
    proyecto: Proyecto[];
    habilidad: Habilidad[];
    contacto: Contacto[];
}
export interface Usuario{
    username: string;
    password: string;
}
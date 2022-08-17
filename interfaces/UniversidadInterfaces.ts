import { dato } from "./DatoInterfaces"

export interface universidad { 
    id: number,
    nombre: string,
    siglas: string,
    facultad: string,
    escuela: string,
    contacto: string,
    cargo: string,
    datos: dato
  }
  
  export interface getUniversidades { 
    fetchUniversidades: universidad[]
  }
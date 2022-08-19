import { dato } from "./DatoInterfaces"

export interface ong { 
    id: number,
    nombre: string,
    siglas: string,
    mision: string,
    vision: string,
    contacto: string,
    datos: dato
  }
  
  export interface getOngs { 
    fetchOngs: ong[]
  }
import { dato } from "./DatoInterfaces"

export interface cooperante { 
    id: number,
    nombre: string,
    siglas: string,
    mision: string,
    direccion: string,
    pais: string,
    ciudad: string,
    datos: dato
  }
  
  export interface getCooperantes { 
    fetchCooperantes: cooperante[]
  }
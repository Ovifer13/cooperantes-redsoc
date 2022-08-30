import { gql } from '@apollo/client'

export const CREATE_UNIVERSIDAD = gql `
  mutation Universidad( 
    $nombre: String,
    $siglas: String,
    $facultad: String,
    $escuela: String,
    $contacto: String,
    $cargo: String) {
    createUniversidad(createFields: {
        nombre: $nombre
        siglas: $siglas
        facultad: $facultad
        escuela: $escuela
        contacto: $contacto
        cargo: $cargo
    }) {
      id
      nombre
    }
  }
`
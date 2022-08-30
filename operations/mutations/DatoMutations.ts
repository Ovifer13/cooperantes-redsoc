import { gql } from '@apollo/client'

export const CREATE_DATO = gql `
  mutation Datos( 
    $nombre: String,
    $cooperante_id: Int,
    $universidad_id: Int,
    $ong_id: Int,
    $catalogo_dato_id: Int) {
    createDato(createFields: {
        nombre: $nombre
        cooperante_id: $cooperante_id
        universidad_id: $universidad_id
        ong_id: $ong_id
        catalogo_dato_id: $catalogo_dato_id
    }) {
      id
      nombre
    }
  }
`
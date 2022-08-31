import { gql } from '@apollo/client'

export const CREATE_COOPERANTE = gql `
  mutation Cooperantes( 
    $nombre: String,
    $siglas: String,
    $mision: String,
    $direccion: String,
    $pais: String,
    $ciudad: String) {
    createCooperante(createFields: {
        nombre: $nombre
        siglas: $siglas
        mision: $mision
        direccion: $direccion
        pais: $pais
        ciudad: $ciudad
    }) {
      id
      nombre
    }
  }
`

export const DELETE_COOPERANTE = gql `
  mutation Cooperantes(
    $id: Int
  ) {
    deleteCooperante(id: $id)
  }
`
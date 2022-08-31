import { gql } from '@apollo/client'

export const CREATE_ONG = gql `
  mutation Ongs( 
    $nombre: String,
    $siglas: String,
    $mision: String,
    $vision: String,
    $contacto: String) {
    createOng(createFields: {
        nombre: $nombre
        siglas: $siglas
        mision: $mision
        vision: $vision
        contacto: $contacto
    }) {
      id
      nombre
    }
  }
`

export const DELETE_ONG = gql `
  mutation Ongs(
    $id: Int
  ) {
    deleteOng(id: $id)
  }
`
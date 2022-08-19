import { gql } from '@apollo/client'

export const GET_ONGS = gql `
  query Ongs {
    fetchOngs {
      id
      nombre
      siglas
      mision
      vision
      contacto
      datos {
        id
        nombre
        catalogoDatos {
          id
        }
      }
    }
  }
`
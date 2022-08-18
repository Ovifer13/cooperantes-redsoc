import { gql } from '@apollo/client'

export const GET_UNIVERSIDADES = gql `
  query Universidades {
    fetchUniversidades {
      id
      nombre
      siglas
      facultad
      escuela
      contacto
      cargo
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
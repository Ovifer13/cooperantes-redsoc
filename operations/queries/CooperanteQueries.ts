import { gql } from '@apollo/client'

export const GET_COOPERANTES = gql `
  query Cooperantes {
    fetchCooperantes {
      id
      nombre
      siglas
      mision
      direccion
      pais
      ciudad
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
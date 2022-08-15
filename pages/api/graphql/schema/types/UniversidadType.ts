import { gql } from 'apollo-server-micro'

module.exports = gql`

  type Universidad {
    id: Int
    nombre: String
    siglas: String
    facultad: String
    escuela: String
    contacto: String
    cargo: String
    datos: [Dato]
  }

  type Query {
    fetchUniversidades: [Universidad]
  }

`
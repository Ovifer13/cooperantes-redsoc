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

  input CreateUniversidadInput {
    nombre: String
    siglas: String
    facultad: String
    escuela: String
    contacto: String
    cargo: String
  }

  type Query {
    fetchUniversidades: [Universidad]
  }

  type Mutation {
    createUniversidad(
      createFields: CreateUniversidadInput
    ): Universidad
  }

`
import { gql } from 'apollo-server-micro'

module.exports = gql`

  type Ong {
    id: Int
    nombre: String
    siglas: String
    mision: String
    vision: String
    contacto: String
    datos: [Dato]
  }

  input CreateOngInput {
    nombre: String
    siglas: String
    mision: String
    vision: String
    contacto: String
  }

  type Query {
    fetchOngs: [Ong]
  }

  type Mutation {
    createOng(
      createFields: CreateOngInput
    ): Ong

    deleteOng(id: Int): String
  }

`
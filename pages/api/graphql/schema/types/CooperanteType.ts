import { gql } from 'apollo-server-micro'

module.exports = gql`

  type Cooperante {
    id: Int
    nombre: String
    siglas: String
    mision: String
    direccion: String
    pais: String
    ciudad: String
    datos: [Dato]
  }
  
  input CreateCooperanteInput {
    nombre: String
    siglas: String
    mision: String
    direccion: String
    pais: String
    ciudad: String
  }

  type Query {
    fetchCooperantes: [Cooperante]
  }

  type Mutation {
    createCooperante(
      createFields: CreateCooperanteInput,
    ): Cooperante

    deleteCooperante(id: Int): String
  }

`
import { gql } from 'apollo-server-micro'

module.exports = gql`

  type Cooperante {
    id: Int
    siglas: String
    mision: String
    direccion: String
    pais: String
    ciudad: String
    datos: [Dato]
  }

  type Query {
    fetchCooperantes: [Cooperante]
  }

`
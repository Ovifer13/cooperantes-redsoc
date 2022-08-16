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

  type Query {
    fetchOngs: [Ong]
  }

`
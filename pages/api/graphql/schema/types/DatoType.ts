import { gql } from 'apollo-server-micro'

module.exports = gql`

  type Dato {
    id: Int
    nombre: String
    cooperante_id: Int
    universidad_id: Int
    ong_id: Int
    catalogo_dato_id: Int
    catalogoDatos: [CatalogoDato]
  }

  input CreateDatoInput {
    nombre: String
    cooperante_id: Int
    universidad_id: Int
    ong_id: Int
    catalogo_dato_id: Int
  }

  type Query {
    fetchDatos: [Dato]
  }

  type Mutation {
    createDato(
      createFields: CreateDatoInput
    ): Dato
  }

`
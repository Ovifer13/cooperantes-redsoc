import { gql } from 'apollo-server-micro'

module.exports = gql`

  type CatalogoDato {
    id: Int
    nombre: String
  }

  type Query {
    fetchCatalogoDatos: [CatalogoDato]
  }

`
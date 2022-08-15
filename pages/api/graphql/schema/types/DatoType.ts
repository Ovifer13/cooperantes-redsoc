import { gql } from 'apollo-server-micro'

module.exports = gql`

  type Dato {
    id: Int
    nombre: String
    cooperante_id: Int
    universidad_id: Int
    catalogo_dato_id: Int
    catalogoDatos: [CatalogoDato]
  }

  type Query {
    fetchDatos: [Dato]
  }

`
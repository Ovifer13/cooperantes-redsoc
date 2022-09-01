module.exports = {

    CatalogoDato: {

    },

    Query: {
        fetchCatalogoDatos: (catalogo_datos: any, args: any, { CatalogoDato }: any) => (
            CatalogoDato.findAll()
        )
    }

}

export {}
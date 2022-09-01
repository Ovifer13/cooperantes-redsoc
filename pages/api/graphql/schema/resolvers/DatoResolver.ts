module.exports = {

    Dato: {
        catalogoDatos: (dato: any, args: any, { CatalogoDato }: any) => (
            CatalogoDato.findAll({ where: { id: dato.catalogo_dato_id }})
        )
    },

    Query: {
        fetchDatos: (dato: any, args: any, { Dato }: any) => (
            Dato.findAll()
        )
    },

    Mutation: {
        createDato: (dato: any, args: any, { Dato }: any) => {
            return Dato.create({
                ...args.createFields
            })
        }
    }

}

export {}
module.exports = {

    Cooperante: {
        datos: (cooperantes: any, args: any, { Dato }: any) => (
            Dato.findAll({ where: {cooperante_id: cooperantes.id }})
        )
    },

    Query: {
        fetchCooperantes: (cooperantes: any, args: any, { Cooperante }: any) => (
            Cooperante.findAll()
        )
    },

    Mutation: {
        createCooperante: (cooperante: any, args: any, { Cooperante }: any) => {
            return Cooperante.create({
                ...args.createFields
            })
        },

        deleteCooperante: (cooperante: any, args: any, { Cooperante }: any) => {
            return (
                Cooperante.destroy({ where: args })
            )
        }
    }

}

export {}
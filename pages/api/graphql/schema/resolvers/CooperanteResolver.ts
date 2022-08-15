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
    }

}
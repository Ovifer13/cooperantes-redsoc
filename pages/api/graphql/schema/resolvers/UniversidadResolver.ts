module.exports = {

    Universidad: {
        datos: (universidades: any, args: any, { Dato }: any) => (
            Dato.findAll({ where: {universidad_id: universidades.id }})
        )
    },

    Query: {
        fetchUniversidades: (universidad: any, args: any, { Universidad }: any) => (
            Universidad.findAll()
        )
    }

}
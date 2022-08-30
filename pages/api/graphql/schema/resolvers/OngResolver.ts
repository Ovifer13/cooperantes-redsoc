module.exports = {

    Ong: {
        datos: (ongs: any, args: any, { Dato }: any) => (
            Dato.findAll({ where: {ong_id: ongs.id }})
        )
    },

    Query: {
        fetchOngs: (ong: any, args: any, { Ong }: any) => (
            Ong.findAll()
        )
    },

    Mutation: {
        createOng: (ongs: any, args: any, { Ong }: any) => {
            return Ong.create({
                ...args.createFields
            })
        }
    }

}
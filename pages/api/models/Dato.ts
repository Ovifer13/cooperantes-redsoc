const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize: any) => {

    class Dato extends Model {}

    Dato.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cooperante_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'cooperantes',
                key: 'id'
            }
        },
        universidad_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'universidades',
                key: 'id'
            }
        },
        ong_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'ongs',
                key: 'id'
            }
        },
        catalogo_dato_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'catalogo_datos',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        modelName: 'datos',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })

    return Dato

}

export {}
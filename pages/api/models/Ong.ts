const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize: any) => {

    class Ong extends Model {}

    Ong.init({
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
        siglas: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mision: {
            type: DataTypes.STRING
        },
        vision: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contacto: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'ong',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })

    return Ong

}

export {}
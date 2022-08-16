const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize: any) => {

    class Cooperante extends Model {}

    Cooperante.init({
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
        },
        mision: {
            type: DataTypes.STRING(2000),
        },
        direccion: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        pais: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ciudad: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        modelName: 'cooperantes',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })

    return Cooperante

}

export {}
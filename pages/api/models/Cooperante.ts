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
        siglas: {
            type: DataTypes.STRING,
        },
        mision: {
            type: DataTypes.STRING,
        },
        direccion: {
            type: DataTypes.STRING,
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
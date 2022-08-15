const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize: any) => {

    class Universidad extends Model {}

    Universidad.init({
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
        facultad: {
            type: DataTypes.STRING
        },
        escuela: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contacto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cargo: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        modelName: 'universidades',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })

    return Universidad

}

export {}
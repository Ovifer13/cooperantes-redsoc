const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize: any) => {

    class CatalogoDato extends Model {}

    CatalogoDato.init({
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
    },
    {
        sequelize,
        modelName: 'catalogo_datos',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })

    return CatalogoDato

}

export {}
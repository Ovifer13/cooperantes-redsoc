module.exports = {
  
  async up (queryInterface, Sequelize) {
      return queryInterface.createTable('cooperantes', {
          id: {
              type: Sequelize.DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
              allowNull: false
          },
          siglas: {
              type: Sequelize.DataTypes.STRING
          },
          mision: {
              type: Sequelize.DataTypes.STRING
          },
          direccion: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false
          },
          pais: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false
          },
          ciudad: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false
          },
      })
  },

  async down (queryInterface) {
      return queryInterface.dropTable('cooperantes');
  }

}

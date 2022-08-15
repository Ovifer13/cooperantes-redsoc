module.exports = {
  
  async up (queryInterface, Sequelize) {
      return queryInterface.createTable('universidades', {
          id: {
              type: Sequelize.DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
              allowNull: false
          },
          nombre: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false
          },
          siglas: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false
          },
          facultad: {
              type: Sequelize.DataTypes.STRING
          },
          escuela: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false
          },
          contacto: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false
          },
          cargo: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false
          }
      })
  },

  async down (queryInterface) {
      return queryInterface.dropTable('universidades');
  }

}

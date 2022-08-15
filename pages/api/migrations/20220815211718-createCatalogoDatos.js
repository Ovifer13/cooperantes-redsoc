module.exports = {
  
  async up (queryInterface, Sequelize) {
      return queryInterface.createTable('catalogo_datos', {
          id: {
              type: Sequelize.DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
              allowNull: false
          },
          nombre: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false
          }
      })
  },

  async down (queryInterface) {
      return queryInterface.dropTable('catalogo_datos');
  }

}

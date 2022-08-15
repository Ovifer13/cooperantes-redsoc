module.exports = {
  
  async up (queryInterface, Sequelize) {
      return queryInterface.createTable('datos', {
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
          cooperante_id: {
              type: Sequelize.DataTypes.INTEGER,
              references: {
                model: 'cooperantes',
                key: 'id'
              }
          },
          universidad_id: {
              type: Sequelize.DataTypes.INTEGER,
              references: {
                model: 'universidades',
                key: 'id'
              }
          }
      })
  },

  async down (queryInterface) {
      return queryInterface.dropTable('datos');
  }

}

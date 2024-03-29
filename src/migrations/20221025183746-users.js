'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: { 
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true,
      },
      display_name: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false, 
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
    await queryInterface.dropTable('users');
  }
};

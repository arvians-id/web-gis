'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('data_schools', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      marker: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sd: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      mi: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      smp: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      mts: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      latitude: {
        allowNull: false,
        type: Sequelize.STRING
      },
      longitude: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('data_schools');
  }
};
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('data_worships', {
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
      islam: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      gereja: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      pura: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      vihara: {
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
    await queryInterface.dropTable('data_worships');
  }
};
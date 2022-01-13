'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('data_religions', {
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
      budha: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      hindu: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      katolik: {
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
    await queryInterface.dropTable('data_religions');
  }
};
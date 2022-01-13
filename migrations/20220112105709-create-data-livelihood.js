'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('data_livelihoods', {
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
      pns: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bumn: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      tni: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      polisi: {
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
    await queryInterface.dropTable('data_livelihoods');
  }
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_Religion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Data_Religion.init({
    marker: {
      allowNull: false,
      type: DataTypes.STRING
    },
    islam: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    budha: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    hindu: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    katolik: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    protestan: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    latitude: {
      allowNull: false,
      type: DataTypes.STRING
    },
    longitude: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'data_religion',
  });
  return Data_Religion;
};
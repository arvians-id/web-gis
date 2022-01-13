'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_School extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Data_School.init({
    marker: {
      allowNull: false,
      type: DataTypes.STRING
    },
    sd: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    mi: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    smp: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    mts: {
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
    modelName: 'data_school',
  });
  return Data_School;
};
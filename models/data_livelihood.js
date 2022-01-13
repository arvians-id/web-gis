'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_Livelihood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Data_Livelihood.init({
    marker: {
      allowNull: false,
      type: DataTypes.STRING
    },
    pns: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    bumn: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    tni: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    polisi: {
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
    modelName: 'data_livelihood',
  });
  return Data_Livelihood;
};
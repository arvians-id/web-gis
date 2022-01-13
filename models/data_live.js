'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_Live extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Data_Live.init({
    marker: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lahir: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    mati: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    datang: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    pindah: {
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
    modelName: 'data_live',
  });
  return Data_Live;
};
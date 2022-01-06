'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class district extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  district.init({
    nama: {
      allowNull: false,
      type: DataTypes.STRING
    },
    luas: {
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
    isActive: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'district',
  });
  return district;
};
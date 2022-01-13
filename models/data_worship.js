'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_Worship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Data_Worship.init({
    marker: {
      allowNull: false,
      type: DataTypes.STRING
    },
    islam: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    gereja: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    pura: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    vihara: {
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
    modelName: 'data_worship',
  });
  return Data_Worship;
};
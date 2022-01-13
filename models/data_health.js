'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_Health extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Data_Health.init({
    marker: {
      allowNull: false,
      type: DataTypes.STRING
    },
    rumah_sakit: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    rumah_sakit_bersalin: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    poliklinik: {
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
    modelName: 'data_health',
  });
  return Data_Health;
};
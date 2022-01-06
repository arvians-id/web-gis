'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class village extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  village.init({
    districtId: {
      allowNull: false,
      references: {
        model: 'districts',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    nama: {
      allowNull: false,
      type: DataTypes.STRING
    },
    luas: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    warna: {
      allowNull: false,
      type: DataTypes.STRING
    },
    geojson: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'village',
  });
  return village;
};
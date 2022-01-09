'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Village extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.district)
    }
  };
  Village.init({
    districtId: {
      allowNull: false,
      type: DataTypes.INTEGER,
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
      type: DataTypes.FLOAT
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
  return Village;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_Population extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.village);
    }
  };
  Data_Population.init({
    villageId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'villages',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    laki_laki: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    perempuan: {
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
    modelName: 'data_population',
  });
  return Data_Population;
};
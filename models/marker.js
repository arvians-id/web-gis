'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class marker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  marker.init({
    districtId: {
      allowNull: false,
      references: {
        model: 'districts',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    layerGroupId: {
      allowNull: false,
      references: {
        model: 'layer_groups',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    icon: {
      allowNull: false,
      type: DataTypes.STRING
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
    modelName: 'marker',
  });
  return marker;
};
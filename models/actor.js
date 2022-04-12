'use strict';
const {
  Model
} = require('sequelize');
const genre = require('./genre');
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Actor.belongsTo(models. Movie, {
        foreignKey: 'movie_id'
      })
    }
  }
  Actor.init({
    actorName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    movie_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'movies',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'actor',
    tableName: 'Actor'
  });
  return actor;
};
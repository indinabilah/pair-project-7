'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Movie extends Model{
    static associate(models){
      Movie.belongsToMany(models.User, {through: "Tiket"})
    }
  }
  Movie.init({
    movie_name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {sequelize})
  return Movie;
};
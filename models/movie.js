'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Movie extends Model{
    static associate(models){
      Movie.belongsToMany(models.User, {through: "Ticket"})
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
    },
    image:{
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {sequelize})
  return Movie;
};
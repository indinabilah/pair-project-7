'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Ticket extends Model{
    static associate(models){
      Ticket.belongsTo(models.Transaction)
      Ticket.belongsTo(models.Movie)
    }
    //user_id atau transaction_id
    static getTotalPrice(user_id){
      let totalPrice 
      Model.Ticket.findAll()
      .then(data => {
        totalPrice = 0
        if(data.TransactionId === user_id){
          totalPrice += price
        }
        return totalPrice
      })
      .catch(err => {
        return err.message
      })
    }

    //nameMovie
    movie(value){
      Model.Movie.findOne({
        where: {id: value}
      })
      .then(data => {
        return data.movie_name
      })
      .catch(err => {
        return err.message
      })
    }
  }
  Ticket.init({
    TransactionId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MovieId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seat:{
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {sequelize})
  return Ticket;
};
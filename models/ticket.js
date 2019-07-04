'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Ticket extends Model{
    static associate(models){
      Ticket.belongsTo(models.Transaction)
      Ticket.belongsTo(models.Movie)
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
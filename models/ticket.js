'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Ticket extends Model{
    static associate(models){}
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
    }
  }, {sequelize})
  return Ticket;
};
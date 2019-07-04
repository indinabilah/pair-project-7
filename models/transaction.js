'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Transaction extends Model{
    static associate(models){
      Transaction.belongsTo(models.User)
      Transaction.belongsToMany(models.Movie, {through: "Ticket"})
    }
  }
  Transaction.init({
    UserId:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {sequelize})
  return Transaction;
};
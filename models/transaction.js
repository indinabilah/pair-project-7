'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Transaction extends Model{
    static associate(models){
      Transaction.belongsToMany(models.Movie, {through: "Tiket"})
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
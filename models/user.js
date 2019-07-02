'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model{
    static associate(models){}
  }
  User.init({
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isAlphanumeric: {
          args: true,
          msg: 'tidak boleh selain huruf & angka'
        },
        len:{
          args: [6, 10],
          msg: 'minimal panjang karakter 6 & maksimal 10'
        } 
      }
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;
      }
    }, sequelize
  })
  return User;
};
const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const User = sequelize.define('User', {

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salt: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  secret: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, { timestamps: true });

User.associate = function (models) {
  User.hasMany(models.Notes);
};

module.exports = User;

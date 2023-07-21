const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Notes = sequelize.define('Notes', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  cover: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { timestamps: true });

Notes.associate = function (models) {
  Notes.belongsTo(models.User);
};

module.exports = Notes;

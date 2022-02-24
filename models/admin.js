const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connections/dbconnection");
const bcrypt = require('bcrypt');

class Admin extends Model {}

Admin.init(
  {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,

      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
      }

    },

  {
    sequelize,
    freezeTableName: true,
    modelName: "patient",
  }
);

module.exports = admin;
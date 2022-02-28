const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/dbconnection");

class Admin extends Model {}

Admin.init(
  {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
          type: DataTypes.STRING,
          allowNull: false,

      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
      },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    }

  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "Admin",
  }
);

module.exports = Admin;

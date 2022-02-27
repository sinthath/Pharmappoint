const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/dbconnection");

class User extends Model {}

User.init(
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

    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dob: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    allergies: {
        type: DataTypes.BOOLEAN,
        allowNull: false,

    }

  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "user",
  }
);

module.exports = User;
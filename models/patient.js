const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/dbconnection");

class Patient extends Model {}

Patient.init(
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
    modelName: "patient",
  }
);

module.exports = patient;

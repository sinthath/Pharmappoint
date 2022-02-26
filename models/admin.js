const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [4]
          }
      }

  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "admin",
  }
);

module.exports = Admin;

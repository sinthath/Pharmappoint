const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connections/dbconnection");
const bcrypt = require('bcrypt');

class Patient extends Model {
  passwordCheck(passwordLogin) {
    return bcrypt.compareSync(passwordLogin, this.password);
    }
}

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
    hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }

},


    sequelize,
    freezeTableName: true,
    modelName: "patient",
  }
);

module.exports = patient;
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/dbconnection");
const bcrypt = require('bcrypt');

class User extends Model {
  passwordCheck(passwordLogin) {
    return bcrypt.compareSync(passwordLogin, this.password);
    }
}

User.init(
  {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      admin:{
        type: DataTypes.BOOLEAN,
        allowNull: false,

      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,

      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [9]
          }
          
      },
      securityOne: {
          type: DataTypes.STRING,
          allowNull: false,
         
      },
      securityTwo: {
        type: DataTypes.STRING,
        allowNull: false,
       
    },
    securityThree: {
        type: DataTypes.STRING,
        allowNull: false,
       
    },
    
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastName: {
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
    modelName: "User",
  }
);

module.exports = User;
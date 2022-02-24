const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connections/dbconnection");
const bcrypt = require('bcrypt');

class Admin extends Model{
    passwordCheck(passwordLogin) {
        return bcrypt.compareSync(passwordLogin, this.password);
    }
}

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

      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
          vaidate :{
              len: [8]
          }
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
    modelName: "admin",
  }
);

module.exports = Admin;
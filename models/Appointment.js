const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbconnection');

class Appointment extends Model {}

Appointment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    Appointments_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    Appointments_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Appointments_time:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Appointments',
  }
);

module.exports = Appointment;


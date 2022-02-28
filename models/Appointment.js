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
    Appointments_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Time',
        key: 'id',
      },
    },
    Appointments_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Appointments_day: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Appointments_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    Appointments_type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
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

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
<<<<<<< HEAD
    User_ID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
=======
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
>>>>>>> 2495b2a1a41ab7fb1fbdc54c3f0009330eef08b0
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

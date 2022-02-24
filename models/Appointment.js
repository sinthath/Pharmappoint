const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
=======
    patient_ID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Patient',
>>>>>>> f5d9f60a2f67d6c27aca8d307dccb8026924b427
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

<<<<<<< HEAD
module.exports = Appointment;
=======
module.exports = Appointment;
>>>>>>> f5d9f60a2f67d6c27aca8d307dccb8026924b427

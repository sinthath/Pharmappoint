const User = require('./User');
const Appointment = require('./Appointment');
const Time = require('./Time');

Appointment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
});

User.hasMany(Appointment, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
});

Time.hasMany(Appointment, {
  foreignKey: 'Appointments_time',
  onDelete: 'cascade',
});
Appointment.belongsTo(Time, {
  foreignKey: 'Appointments_time',
  onDelete: 'cascade',
});

module.exports = { User, Appointment, Time };










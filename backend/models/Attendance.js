const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  checkIn: {
    type: Date,
    required: true
  },
  checkOut: {
    type: Date
  },
  mode:{
    type: String,
    enum:["Office","Remote"]
  },
  date: {
    type: Date, 
    required: true
  }
});

module.exports = mongoose.model('Attendance', attendanceSchema);

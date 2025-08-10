const express = require('express');
const router = express.Router();
const Attendance = require('../models/Attendance');
const User = require('../models/User')

// POST - Create attendance
router.post('/mark', async (req, res) => {
  const { employeeId, mode } = req.body;
  const now = new Date();
  const date = new Date().toDateString();
  const timeOnly = now.toTimeString().split(' ')[0];
  const timeAsDate = new Date(`1970-01-01T${timeOnly}`);

  try {
    //  Get the MongoDB _id from employeeId like '1001A'
    const user = await User.findOne({ employeeId });
    if (!user) return res.status(404).json({ error: 'Employee not found' });

    const existing = await Attendance.findOne({ employeeId: user._id, date });
    if (existing) {
      existing.checkOut = timeAsDate;
      await existing.save();
      return res.status(200).json({ message: 'Check-out  updated', attendance: existing });
    }

    const attendance = await Attendance.create({
      employeeId: user._id, // Saving the actual ObjectId
      checkIn: timeAsDate,
      mode,
      date,
    });

    res.status(201).json({ message: 'Check-in marked', attendance });
  } catch (err) {
  console.error("Error in /mark route", err);
  res.status(500).json({ error: 'Failed to mark attendance', details: err.message });
}
});


// GET /api/attendance/by-department/:departmentName
router.get('/by-department/:departmentName', async (req, res) => {
  const department = req.params.departmentName;

  try {
    const employees = await User.find({ "jobDetails.department": department });
    const employeeIds = employees.map(emp => emp._id); //Use `_id`, not employeeId
    console.log(employeeIds)
    const attendanceRecords = await Attendance.find({ employeeId: { $in: employeeIds } }).sort({ date: -1, checkIn: 1 })
    console.log(attendanceRecords)
    res.status(200).json( attendanceRecords);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch attendance", error: err.message });
  }
});


// GET - Fetch attendance for an employee
router.get('/employee/:employeeId', async (req, res) => {
  try {
    console.log("data is :",req.params.employeeId)
    const employee = await User.findOne({ employeeId: req.params.employeeId });
    if (!employee) return res.status(404).json({ error: 'Employee not found' });

    const attendance = await Attendance.find({ employeeId: employee._id }).sort({ date: -1 });
    console.log(attendance)
    res.status(200).json(attendance);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch attendance' });
  }
});

module.exports = router;

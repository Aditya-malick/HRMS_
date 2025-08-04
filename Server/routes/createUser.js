const express = require('express');
const bcrypt = require("bcryptjs");
const router = express.Router();
const Employee = require('../models/User'); // Assuming schema filename is User.js

router.post('/create', async (req, res) => {
  console.log("📥 Received data:", req.body);
  const {
    employeeId, firstName, lastName, dob, gender,
    email, phone,
    role, department, designation, managerId,
    location, password, base, allowances, deductions, status
  } = req.body;

  // Validation (Basic)
  if (!data.employeeId || !data.firstName || !data.dob || !data.email || !data.password) {
    return res.status(400).json({ message: "Required fields missing!" });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);

    const user = await UserModle.create({
      employeeId,
      firstName,
      lastName,
      dob,
      gender,
      password,
      contact: { email, phone },
      role,
      jobDetails: {
        department,
        designation,
        joiningDate: Date.now(),
        managerId,
      },
      salaryDetails: { base, allowances, deductions },
      location,
      password: hashedPassword,
      status
    });

res.status(201).json({ message: "User created successfully", user, role });
  } catch (err) {
    console.error("❌ Error creating user:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;

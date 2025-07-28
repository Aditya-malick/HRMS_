const express = require('express');
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const router = express.Router();
const UserModle = require('../models/User');

router.post('/create', async (req, res) => {
  console.log("📥 Received data:", req.body);
  const {
    employeeId, firstName, lastName, dob, gender,
    email, phone,
    role, department, designation, managerId,
    location, password, base, allowances, deductions, status
  } = req.body;

  if (!email || !employeeId || !firstName || !password) {
    return res.status(400).json({ message: "Required fields missing!" });
  }

  try {
    const hash = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, hash);

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
    console.error("Error creating user:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;

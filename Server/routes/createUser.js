const express = require('express');
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require('../models/User'); // Assuming schema filename is User.js
const nodemailer = require("nodemailer");

router.post('/create', async (req, res) => {
  console.log("📥 Received data:", req.body);
  const data = req.body;
  const password = `${data.firstName}@password`;
  const email = data.email;


  // Validation (Basic)
  // if (!data.employeeId || !data.firstName || !data.dob || !data.email || !data.password) {
  //   return res.status(400).json({ message: "Required fields missing!" });
  // }

  try {
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(data.password, salt);

    const employee = await User.create({

      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender,
      dob: data.dob,
      bloodGroup: data.bloodGroup,
      maritalStatus: data.maritalStatus,
      nationality: data.nationality,
      religion: data.religion,
      fatherName: data.fatherName,
      aadhaarNumber: data.aadhaarNumber,
      panNumber: data.panNumber,

      mobileNumber: data.mobileNumber,
      alternateNumber: data.alternateNumber,
      email: data.email,
      currentAddress: data.currentAddress,
      permanentAddress: data.permanentAddress,

      highestQualification: data.highestQualification,
      yearOfPassing: data.yearOfPassing,
      institute: data.institute,
      stream: data.stream,
      year: data.year,
      grade: data.grade,

      previousEmployer: data.previousEmployer,
      designation: data.designation,
      from: data.from,
      to: data.to,
      totalExperience: data.totalExperience,
      reasonForLeaving: data.reasonForLeaving,
      skillsUsed: data.skillsUsed,

      department: data.department,
      designation: data.designation,
      employeeType: data.employeeType,
      status: data.status,
      employeeId: data.employeeId,
      employeePassword: password,
      officialEmail: data.officialEmail,
      joiningDate: data.joiningDate,
      reportingManager: data.reportingManager,
      workLocation: data.workLocation,

      gross: data.gross,
      basic: data.basic,
      hra: data.hra,
      otherAllowances: data.otherAllowances,
      bonuses: data.bonuses,
      pf: data.pf,
      esic: data.esic,
      netPay: data.netPay,
      accountNumber: data.accountNumber,
      ifsc: data.ifsc,
      bankName: data.bankName,
      uan: data.uan,
      paymentMode: data.paymentMode,

      // documents: {
      //   resume: data.resume,
      //   photo: data.photo,
      //   aadhaar: data.aadhaarDoc ,
      //   pan: data.panDoc ,
      //   academicCertificates: data.academicCertificates ,
      //   experienceLetters: data.experienceLetters ,
      //   offerRelievingLetters: data.offerLetters ,
      //   bankPassbook: data.bankPassbook ,
      //   otherDocuments: data.otherDocuments ,
      // },


      laptopSerial: data.serialNumber,
      emailAccess: data.emailAccess,
      githubAccess: data.githubAccess,
      portalCredentialsGiven: data.portalCredentialsGiven,

    });

  const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f5b92293496bac",
    pass: "****68f0",
  },
});

// Wrap in an async IIFE so we can use await.
(async () => {
  const info = await transporter.sendMail({
    from: 'ronimalickj4@gmail.com',
    to: {email},
    subject: `Congratulations ${data.firstName}!! ,
    Your on bording is completed that your password is ${password} and employeeId is ${data.employeeId}..
    you can Login from system and Check your Details....
    
    Thanks ,
    regard Team`,
    text: "Hello world?", // plain‑text body
  });

  console.log("Message sent:", info.messageId);
})();

    console.log("created")
    res.status(200).json(employee);
  } catch (err) {
    console.error("❌ Error creating user:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;

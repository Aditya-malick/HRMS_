const express = require('express');
const bcrypt = require("bcryptjs");
const router = express.Router();
const Employee = require('../models/User'); // Assuming schema filename is User.js

router.post('/create', async (req, res) => {
  console.log("📥 Received data:", req.body);
  const data = req.body;

  // Validation (Basic)
  if (!data.employeeId || !data.firstName || !data.dob || !data.email || !data.password) {
    return res.status(400).json({ message: "Required fields missing!" });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);

    const employee = await Employee.create({
      personal: {
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        dob: data.dob,
        bloodGroup: data.bloodGroup || "",
        maritalStatus: data.maritalStatus || "Single",
        nationality: data.nationality || "",
        religion: data.religion || "",
        fatherName: data.fatherName || "",
        aadhaarNumber: data.aadhaarNumber || "N/A",
        panNumber: data.panNumber || "N/A",
      },

      contact: {
        mobileNumber: data.phone,
        alternateNumber: data.alternateNumber || "",
        email: data.email,
        currentAddress: data.currentAddress || "N/A",
        permanentAddress: data.permanentAddress || "N/A",
      },

      education: {
        highestQualification: data.qualification,
        yearOfPassing: data.yearOfPassing,
        institute: data.university,
        stream: data.stream || "",
        year: data.educationYear || 0,
        grade: data.grade || "",
        certifications: data.certifications || [],
      },

      experience: {
        previousEmployer: data.previousEmployer || "N/A",
        designation: data.prevDesignation || "",
        from: data.experienceFrom || null,
        to: data.experienceTo || null,
        totalExperience: data.totalExperience || "",
        reasonForLeaving: data.reasonForLeaving || "",
        skillsUsed: data.skillsUsed || [],
      },

      job: {
        department: data.department,
        designation: data.designation,
        employeeType: data.employeeType || "Permanent",
        status: data.status,
        employeeId: data.employeeId,
        employeePassword: hashedPassword,
        officialEmail: data.officialEmail || "",
        joiningDate: new Date(),
        reportingManager: data.managerId,
        workLocation: data.location,
      },

      salary: {
        gross: Number(data.gross || 0),
        basic: Number(data.base),
        hra: Number(data.hra || 0),
        otherAllowances: Number(data.allowances),
        bonuses: Number(data.bonuses || 0),
        pf: Number(data.pf || 0),
        esic: Number(data.esic || 0),
        netPay: Number(data.netPay || 0),
        bankDetails: {
          accountNumber: data.accountNumber || "",
          ifsc: data.ifsc || "",
          bankName: data.bankName || "",
        },
        uan: data.uan || "",
        paymentMode: data.paymentMode || "Bank Transfer",
      },

      documents: {
        resume: data.resume,
        photo: data.photo,
        aadhaar: data.aadhaarDoc || "",
        pan: data.panDoc || "",
        academicCertificates: data.academicCertificates || [],
        experienceLetters: data.experienceLetters || [],
        offerRelievingLetters: data.offerLetters || [],
        bankPassbook: data.bankPassbook || "",
        otherDocuments: data.otherDocuments || [],
      },

      systemInfo: {
        laptopSerial: data.serialNumber,
        emailAccess: data.emailAccess || false,
        githubAccess: data.githubAccess || false,
        portalCredentialsGiven: data.portalCredentialsGiven || false,
      },
    });

    res.status(201).json({ message: "✅ User created successfully", employee });
  } catch (err) {
    console.error("❌ Error creating user:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;

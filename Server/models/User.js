const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  // 1. Personal Details
  personal: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    dob: { type: Date, required: true },
    bloodGroup: String,
    maritalStatus: { type: String, enum: ["Single", "Married"] },
    nationality: String,
    religion: String,
    fatherName: String,
    aadhaarNumber: { type: String, required: true },
    panNumber: { type: String, required: true },
  },

  // 2. Contact Details
  // contact: {
  //   mobileNumber: { type: String, required: true },
  //   alternateNumber: String,
  //   email: { type: String, required: true },
  //   currentAddress: { type: String, required: true },
  //   permanentAddress: { type: String, required: true },
  // },
  // 3. Educational Qualifications
  education: {
    highestQualification: { type: String, required: true },
    yearOfPassing: { type: Number, required: true },
    institute: { type: String, required: true },
    stream: { type: String, required: true },
    year: { type: Number, required: true },
    grade: { type: String, required: true },
    certifications: [String],
  },

  // 4. Work Experience
  experience: {
    previousEmployer: { type: String },
    designation: String,
    from: Date,
    to: Date,
    totalExperience: String,
    reasonForLeaving: String,
    skillsUsed: [String],
  },

  // 5. Job Details (Current)
  job: {
    department: String,
    designation: String,
    employeeType: { type: String, enum: ["Permanent", "Intern", "Contract"] },
    status: { type: String, enum: ["Active", "Resigned", "Terminated"] },
    employeeId: { type: String, unique: true },
    employeePassword: { type: String, required: true },
    officialEmail: String,
    joiningDate: Date,
    reportingManager: String,
    workLocation: String,
  },

  // 6. Salary / CTC Details
  salary: {
    gross: { type: Number, required: true },
    basic: { type: Number, required: true },
    hra: { type: Number, required: true },
    otherAllowances: { type: Number, required: true },
    bonuses: Number,
    pf: Number,
    esic: Number,
    netPay: Number,
    bankDetails: {
      accountNumber: String,
      ifsc: String,
      bankName: String,
    },
    uan: String,
    paymentMode: { type: String, enum: ["Bank Transfer", "Cheque", "UPI"] },
  },

  // 7. Document Uploads (URLs or Base64 or file reference keys)
  documents: {
    resume: { type: String,  },
    photo: { type: String,  },
    aadhaar: { type: String, },
    pan: { type: String, },
    academicCertificates: [String],
    experienceLetters: [String],
    offerRelievingLetters: [String],
    bankPassbook: String,
    otherDocuments: [String],
  },

  // 8. System Info (Optional - for IT)
  systemInfo: {
    laptopSerial: String,
    emailAccess: Boolean,
    githubAccess: Boolean,
    portalCredentialsGiven: Boolean,
  },
  
  // Timestamps for creation and updates
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

 module.exports = mongoose.model("Employee", employeeSchema);

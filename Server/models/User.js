const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // 1. Personal Details

  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  dob: { type: Date, required: true },
  bloodGroup: String,
  maritalStatus: { type: String, enum: ["Single", "Married"] },
  nationality: String,
  religion: String,
  fatherName: String,
  aadhaarNumber: { type: Number, required: true },
  panNumber: { type: String, required: true },

  //2. Contact Details

  mobileNumber: { type: Number, required: true },
  alternateNumber: Number,
  email: { type: String, required: true },
  currentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  // 3. Educational Qualifications

  highestQualification: { type: String, required: true },
  institute: { type: String, required: true },
  stream: { type: String, required: true },
  year: { type: Number, required: true },
  grade: { type: String, required: true },

  // 4. Work Experience

  previousEmployer: { type: String },
  designation: String,
  from: Date,
  to: Date,
  totalExperience: String,
  reasonForLeaving: String,
  skillsUsed: String,

  // 5. Job Details (Current)

  department: { type: String, require: true },
  designation: { type: String, require: true },
  employeeType: { type: String, enum: ["Permanent", "Intern", "Contract"], require: true },
  status: { type: String, enum: ["Active", "Resigned", "Terminated"], require: true },
  employeeId: { type: String, unique: true, require: true },
  employeePassword: { type: String, required: true },
  officialEmail: String,
  joiningDate: Date,
  reportingManager: String,
  workLocation: String,

  // 6. Salary / CTC Details

  gross: { type: Number, required: true },
  basic: { type: Number, required: true },
  hra: { type: Number, required: true },
  otherAllowances: { type: Number, required: true },
  bonuses: { type: Number, required: true },
  pf: { type: Number, required: true },
  esic: { type: Number, required: true },
  netPay: { type: Number, required: true },
  accountNumber: { type: Number, required: true },
  ifsc: { type: String, required: true },
  bankName: { type: String, required: true },
  uan: String,
  paymentMode: { type: String, enum: ["Bank Transfer", "Cheque", "UPI"] , required:true },

  // 7. Document Uploads (URLs or Base64 or file reference keys)
  // documents: {
  //   resume: { type: String,  },
  //   photo: { type: String,  },
  //   aadhaar: { type: String, },
  //   pan: { type: String, },
  //   academicCertificates: [String],
  //   experienceLetters: [String],
  //   offerRelievingLetters: [String],
  //   bankPassbook: String,
  //   otherDocuments: [String],
  // },

  // 8. System Info (Optional - for IT)

  laptopSerial: String,
  emailAccess: String,
  githubAccess: String,
  portalCredentialsGiven: { type: String, enum: ["Employee", "Manager", "Admin"] , required:true },

  // Timestamps for creation and updates
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);

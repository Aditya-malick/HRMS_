const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  employeeId: { type: String, unique: true },
  firstName: String,
  lastName: String,
  dob: Date,
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },

  password:{
    type: String,
    require:true
  },

  contact: {
    email: { type: String, unique: true },
    phone: Number
  },

  role: {
    type: String,
    enum: ['Employee', 'Manager', 'HR'],
    required: true
  },

  jobDetails: {
    department: String, // e.g., "IT", "HR", "Finance"
    designation: String,
    joiningDate: Date,
    managerId: String // e.g., "John Doe", "MGR102", or any placeholder
  },

  salaryDetails: {
    base: Number,
    allowances: Number,
    deductions: Number
  },

  documents: [
    {
      name: String,
      url: String,
      uploadedAt: { type: Date, default: Date.now }
    }
  ],

  status: {
    type: String,
    enum: ['Active', 'Resigned', 'Terminated'],
    default: 'Active'
  }

}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)
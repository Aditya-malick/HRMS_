import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";

import PersonalInfo from "./formSections/PersonalInfo";
import EducationDetails from "./formSections/Education";
import ContactInfo from "./formSections/Contact";
import ExperienceDetails from "./formSections/Experience";
import JobDetails from "./formSections/Jobdetails";
import SalaryDetails from "./formSections/SalaryDetails";
import SystemInfo from "./formSections/SystemInfo";
import DocumentUpload from "./formSections/Doccuments";

const CreateUserForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    bloodGroup: "",
    maritalStatus: "",
    nationality: "",
    religion: "",
    fatherName: "",
    aadhaarNumber: "",
    panNumber: "",

    // 2. Contact Details
    mobileNumber: "",
    alternateNumber: "",
    email: "",
    currentAddress: "",
    permanentAddress: "",

    // 3. Educational Qualifications
    highestQualification: "",
    yearOfPassing: "",
    institute: "",
    stream: "",
    grade: "",

    // 4. Work Experience
    previousEmployer: "",
    designation: "",
    from: "",
    to: "",
    totalExperience: "",
    reasonForLeaving: "",
    skillsUsed: "",

    // 5. Job Details (Current)
    department: "",
    designation: "",
    employeeType: "",
    status: "",
    employeeId: "",
    officialEmail: "",
    joiningDate: "",
    reportingManager: "",
    workLocation: "",

    // 6. Salary / CTC Details
    gross: "",
    basic: "",
    hra: "",
    otherAllowances: "",
    bonuses: "",
    pf: "",
    esic: "",
    netPay: "",
    accountNumber: "",
    ifsc: "",
    bankName: "",
    uan: "",
    paymentMode: "",

    // // 7. Document Uploads (URLs or Base64 or file reference keys)
    // resume: "",
    // photo: "",
    // aadhaar: "",
    // pan: "",
    // academicCertificates: [],
    // experienceLetters: [],
    // offerRelievingLetters: [],
    // bankPassbook: "",
    // otherDocuments: [String],

    // 8. System Info (Optional - for IT)
    laptopSerial: "",
    emailAccess: "",
    githubAccess: "",
    portalCredentialsGiven: "",
  });

  const [page, setPage] = useState(0);

  const FormTitles = [
    "Personal Information",
    "Education Details",
    "Contact Information",
    "Experience Details",
    "Job Details",
    "Salary Details",
    "System Info",
    // "Document Uploads",
  ];

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <PersonalInfo formData={formData} setFormData={setFormData} />;
      case 1:
        return <EducationDetails formData={formData} setFormData={setFormData} />
      case 2:
        return <ContactInfo formData={formData} setFormData={setFormData} />; // Read-only review page
      case 3:
        return <ExperienceDetails formData={formData} setFormData={setFormData}/>; // Read-only review p
      case 4:
        return <JobDetails formData={formData} setFormData={setFormData} />;
      case 5:
        return <SalaryDetails formData={formData} setFormData={setFormData} />;
      case 6:
        return <SystemInfo formData={formData} setFormData={setFormData} />;
      // case 7:
      //   return <DocumentUpload formData={formData} setFormData={setFormData} />;
      default:
        return <div>Unknown Page</div>;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('in try catch',formData)
      const res = await axios.post(
        "http://localhost:8080/api/users/create",
        formData
      );

      if (res.status === 200 || res.status === 201) {
        console.log("success")
        toast.success("✅ User Created!", { position: "top-right" });
        
      } else {
        alert(res.data.message || "Error creating user");
        toast.error("❌ Somthing went rong!", { position: "bottom-left" });

      }
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("❌ Somthing went rong!", { position: "bottom-left" });

    }
  };

  return (
    //Main div
    <div className="flex justify-center pt-12 h-[100vh]">

      {/* form conatainer */}
      <div className="w-[90%] py-3 px-10 
      bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg
      bg-purple-400 rounded-tr-2xl rounded-tl-2xl ">
        
        {/* progress bar */}
        <div className="h-[5%] ">
          <div className="h-5 p-1 bg-white rounded-lg">
            <div
              style={{
                width: `${((page + 1) / FormTitles.length) * 100}%`,
                height: "100%",
                background: "#3b82f6",
                transition: "width 0.3s",
              }}
              className="rounded-lg"
            />
          </div>
        </div>
        
          {/* form taitle */ }
        <div className=" h-[5%] mb-2 ">
          <h1 className="text-2xl font-bold text-center ">
            {FormTitles[page]}
          </h1>
        </div>
        
          {/* form  */ }
        <form
          className="  h-[80%] "
          onSubmit={handleSubmit}
        >
          {PageDisplay()}
        </form>
          
          {/* Button conatainer */ }
        <div className="flex justify-between h-[7%] w-[100%] mt-2">
          <button
            disabled={page === 0}
            className="px-4 py-2 text-white bg-blue-600 rounded "
            onClick={(e) => {
              e.preventDefault();
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>

          {page === FormTitles.length - 1 ? (
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
          ) : (
            <button
              className="px-4 py-2 text-white bg-blue-600 rounded"
              onClick={(e) => {
                e.preventDefault();
                setPage((currPage) => currPage + 1);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateUserForm;
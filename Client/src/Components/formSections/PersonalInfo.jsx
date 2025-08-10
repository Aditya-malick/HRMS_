// Separate forms for each section of the employee schema using Tailwind CSS
// Example shows PersonalDetailsForm - you can follow the same structure for other sections

import React from "react";

const PersonalDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className=" p-4 bg-white  h-[100%] rounded-3xl overflow-y-scroll overscroll-contain ">

      <div className="flex gap-4 m-3">
        <div className="w-[50%]">
          <label className="mt-2 text-xl font-bold text-gray-800 col-span-full">
            First Name *
          </label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full p-2 mr-2 border rounded-xl"
          />
        </div>
        <div className="w-[50%]">
          <label className="mt-2 text-xl font-bold text-gray-800 col-span-full">
            Last Name *
          </label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full p-2 border rounded-xl"
          />
        </div>
      </div>

      <div className="flex gap-4 m-3">
        <div className="w-[50%] ">
          <label className="text-xl font-bold text-gray-800 col-span-full ">
            Gender *
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="w-[50%]">
          <label className="block text-xl font-bold text-gray-800 ">
            Date of Birth *
          </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="p-2 border rounded-xl"
          />
        </div>
      </div>

      <div className="flex gap-4 m-3">
        <div className="w-[50%]">
          <label className="block text-xl font-bold text-gray-800">
            Blood Group
          </label>
          <input
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            placeholder="Blood Group"
            className="w-full p-2 border rounded-xl"
          />
        </div>
        <div className="w-[50%]">
          <label className="block text-xl font-bold text-gray-800">Merital Status</label>
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            className="block p-2 border rounded-xl"
          >
            <option value="">Marital Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </select>
        </div>
      </div>

      <div className="flex gap-4 m-3">
        <div className="w-[50%]">
          <label className="block text-xl font-bold text-gray-800 ">
            Nationality
          </label>
          <input
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            placeholder="Nationality"
            className="block w-full p-2 border rounded-xl"
          />
        </div>
        <div className="w-[50%]"> 
          <label className="text-xl font-bold text-gray-800 ">
            Religion
          </label>
          <input
            name="religion"
            value={formData.religion}
            onChange={handleChange}
            placeholder="Religion"
            className="block w-full p-2 border rounded-xl"
          />
        </div>
      </div>

      <div className="flex gap-4 m-3">
        <div className="w-[50%]">
          <label className="mt-2 text-xl font-bold text-gray-800 Block">
            Father's Name
          </label>
          <input
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            placeholder="Father's Name"
            className="w-full p-2 border rounded-xl Block"
          />
        </div>

        <div className="w-[50%]">
          <label className="mt-2 text-xl font-bold text-gray-800 Block">
            Aadhaar Number *
          </label>
          <input
            name="aadhaarNumber"
            value={formData.aadhaarNumber}
            onChange={handleChange}
            placeholder="Aadhaar Number"
            className="w-full p-2 border rounded-xl Block"
          />
        </div>
      </div>

      <div className="flex gap-4 m-3">
        <div className="w-[50%]">

        <label className="block mt-2 text-xl font-bold text-gray-800">
          PAN Number *
        </label>
        <input
          name="panNumber"
          value={formData.panNumber}
          onChange={handleChange}
          placeholder="PAN Number"
          className="p-2 border rounded-xl"
        />
        </div>
      </div>
</div>
  );
};

export default PersonalDetails;
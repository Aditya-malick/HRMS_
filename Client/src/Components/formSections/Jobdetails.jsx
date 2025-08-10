import React from 'react';

const JobDetails = ({ formData, setFormData }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData,  [name]: value });
  };

  return (
    <div className="p-4 bg-white  h-[100%] rounded-3xl overflow-y-scroll">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">Department *</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm"
            placeholder="Software Development"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Designation *</label>
          <input
            type="text"
            name="designation"
            value={formData.designation }
            onChange={handleChange}
            className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm"
            placeholder="Full Stack Developer"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Employee Type *</label>
          <select
            name="employeeType"
            value={formData.employeeType}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="">Select</option>
            <option value="Permanent">Permanent</option>
            <option value="Intern">Intern</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Employment Status *</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="">Select</option>
            <option value="Active">Active</option>
            <option value="Resigned">Resigned</option>
            <option value="Terminated">Terminated</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Employee ID *</label>
          <input
            type="text"
            name="employeeId"
            value={formData.employeeId }
            onChange={handleChange}
            className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm"
            placeholder="1001A"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Official Email ID</label>
          <input
            type="email"
            name="officialEmail"
            value={formData.officialEmail}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm"
            placeholder="sumit@company.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Joining</label>
          <input
            type="date"
            name="joiningDate"
            value={formData.joiningDate }
            onChange={handleChange}
            className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Reporting Manager</label>
          <input
            type="text"
            name="reportingManager"
            value={formData.reportingManager }
            onChange={handleChange}
            className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm"
            placeholder="Anirudh Kushari"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Work Location</label>
          <input
            type="text"
            name="workLocation"
            value={formData.workLocation}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm"
            placeholder="Kolkata, WB"
          />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
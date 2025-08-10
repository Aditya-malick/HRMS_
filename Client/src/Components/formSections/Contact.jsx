import React from 'react';

const ContactDetails = ({ formData, setFormData }) => {
  return (
    <div className="p-4 bg-white  h-[100%] rounded-3xl overflow-y-scroll">
      <div>
        <label className="block text-sm font-medium text-gray-700">Mobile Number *</label>
        <input
          name='mobileNumber'
          type="text"
          value={formData.mobileNumber}
          onChange={(e) => setFormData({ ...formData,  mobileNumber: e.target.value })}
          className="w-full px-3 py-2 mt-1 border rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Alternate Number</label>
        <input
          name='alternateNumber'
          type="text"
          value={formData.alternateNumber}
          onChange={(e) => setFormData({ ...formData, alternateNumber: e.target.value })}
          className="w-full px-3 py-2 mt-1 border rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email *</label>
        <input
        name='email'
          type="text"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData,  email: e.target.value })}
          className="w-full px-3 py-2 mt-1 border rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Current Address *</label>
        <input
        name='currentAddress'
          type="text"
          value={formData.currentAddress}
          onChange={(e) => setFormData({ ...formData,  currentAddress: e.target.value })}
          className="w-full px-3 py-2 mt-1 border rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Permanent Address *</label>
        <input
        name='permanentAddress'
          type="text"
          value={formData.permanentAddress}
          onChange={(e) => setFormData({ ...formData,  permanentAddress: e.target.value })}
          className="w-full px-3 py-2 mt-1 border rounded-md"
          required
        />
      </div>
    </div>
  );
};

export default ContactDetails;
import React from 'react';

const SystemInfo = ({ formData, setFormData }) => {
  return (
    <div className="p-4 bg-white  h-[100%] rounded-3xl overflow-y-scroll">
      <h2 className="mb-2 text-xl font-semibold">System Information</h2>

      <label className="flex flex-col">
         laptop Serial
        <input
        name='laptopSerial'
          type="text"
          value={formData.laptopSerial}
          onChange={(e) =>
            setFormData({ ...formData, laptopSerial: e.target.value })
          }
          placeholder="e.g., Dell Latitude 3420"
          className="p-2 border rounded"
        />
      </label>

      <label className="flex flex-col">
         emailAccess
        <input
        name='emailAccess'
          type="text"
          value={formData.emailAccess}
          onChange={(e) =>
            setFormData({ ...formData, emailAccess: e.target.value })
          }
          placeholder="e.g., Dell Latitude 3420"
          className="p-2 border rounded"
        />
      </label>

      <label className="flex flex-col">
        githubAccess
        <input
        name='githubAccess'
          type="text"
          value={formData.githubAccess}
          onChange={(e) =>
            setFormData({ ...formData, githubAccess: e.target.value })
          }
          placeholder="Enter asset ID"
          className="p-2 border rounded"
        />
      </label>
      
      <label className="flex flex-col">
        portal Credentials Given *
        <select 
        name='portalCredentialsGiven'
          value={formData.portalCredentialsGiven}
          onChange={(e) =>
            setFormData({ ...formData, portalCredentialsGiven: e.target.value })
          }
          className="p-2 border rounded"
          required
        >
          <option value="">Select access level</option>
          <option value="Employee">Employee</option>
          <option value="Manager">Manager</option>
          <option value="Admin">Admin</option>
        </select>
      </label>
    </div>
  );
};

export default SystemInfo;
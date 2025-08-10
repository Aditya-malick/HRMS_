import React from 'react';

const ExperienceDetails = ({ formData, setFormData }) => {

  const handleChange = ( field, value) => {
    setFormData({ ...formData, [field]: value });
  };


  return (
    <div className="p-4 bg-white  h-[100%] rounded-3xl overflow-y-scroll">

        <div  className="p-4 space-y-4 border rounded-md shadow-sm">

          <div>
            <label className="block text-sm font-medium text-gray-700">Company Name </label>
            <input
             name='previousEmployer'
              type="text"
              value={formData.previousEmployer}
              onChange={(e) => handleChange( 'previousEmployer', e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md"
              
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Role / Designation</label>
            <input
             name='designation'
              type="text"
              value={formData.designation}
              onChange={(e) => handleChange('designation', e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md"
              
            />
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">From</label>
              <input
               name='from'
                type="date"
                value={formData.from}
                onChange={(e) => handleChange( 'from', e.target.value)}
                className="w-full px-3 py-2 mt-1 border rounded-md"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">To</label>
              <input
               name='to'
                type="date"
                value={formData.to}
                onChange={(e) => handleChange( 'to', e.target.value)}
                className="w-full px-3 py-2 mt-1 border rounded-md"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Total Experience</label>
            <input
              name='totalExperience'
              type='text'
              value={formData.totalExperience}
              onChange={(e) => handleChange( 'totalExperience', e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Reason For Leaving</label>
            <textarea
            name='reasonForLeaving'
              value={formData.reasonForLeaving}
              onChange={(e) => handleChange( 'reasonForLeaving', e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">skills Used</label>
            <input
              name='skillsUsed'
              type='text'
              value={formData.skillsUsed}
              onChange={(e) => handleChange( 'skillsUsed', e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md"
            />
          </div>
    </div>
    </div>
  )
};

export default ExperienceDetails;
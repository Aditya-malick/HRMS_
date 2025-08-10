import React from 'react';

const EducationDetails = ({ formData, setFormData }) => {
  
  return (
    <div className="p-4 bg-white  h-[100%] rounded-3xl overflow-y-scroll">

        <div className="p-4 space-y-4 border rounded-md shadow-sm">

          <div>
            <label className="block text-sm font-medium text-gray-700">highestQualification *</label>
            <input
            name='highestQualification'
              type="text"
              value={formData.highestQualification}
              onChange={(e) => {
                setFormData({...formData, highestQualification: e.target.value})
              }}
              className="w-full px-3 py-2 mt-1 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">institute *</label>
            <input
            name='institute'
              type="text"
              value={formData.institute}
              onChange={(e) => {
                setFormData({...formData, institute: e.target.value})
              }}
              className="w-full px-3 py-2 mt-1 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">stream *</label>
            <input
            name='stream'
              type="text"
              value={formData.stream}
              onChange={(e) => {
                setFormData({...formData, stream: e.target.value})
              }}
              className="w-full px-3 py-2 mt-1 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Year *</label>
            <input
            name='year'
              type="text"
              value={formData.year}
              onChange={(e) => {
                setFormData({...formData, year: e.target.value})
              }}
              className="w-full px-3 py-2 mt-1 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Grade *</label>
            <input
            name='grade'
              type="text"
              value={formData.grade}
              onChange={(e) => {
                setFormData({...formData, grade: e.target.value})
              }}
              className="w-full px-3 py-2 mt-1 border rounded-md"
            />
          </div>
        </div>
    </div>
)};

export default EducationDetails;
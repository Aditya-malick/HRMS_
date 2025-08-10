import React from 'react';

const DocumentUpload = ({ formData, setFormData }) => {
  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFormData({ ...formData, [field]: file });
  };

  return (
    <div className="p-4 bg-white  h-[100%] rounded-3xl overflow-y-scroll overscroll-contain ">
      <h2 className="mb-2 text-xl font-semibold">Document Upload</h2>

      <label className="flex flex-col">
        Upload Resume
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => handleFileChange(e, 'resume')}
          className="p-2 border rounded"
        />
      </label>

      <label className="flex flex-col">
        Upload ID Proof (Aadhar, PAN, etc.)
        <input
          type="file"
          accept=".pdf,.jpg,.png"
          onChange={(e) => handleFileChange(e, 'idProof')}
          className="p-2 border rounded"
        />
      </label>

      <label className="flex flex-col">
        Upload Offer Letter (if applicable)
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => handleFileChange(e, 'offerLetter')}
          className="p-2 border rounded"
        />
      </label>

      <label className="flex flex-col">
        Upload Passport Photo
        <input
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={(e) => handleFileChange(e, 'photo')}
          className="p-2 border rounded"
        />
      </label>
    </div>
  );
};

export default DocumentUpload;
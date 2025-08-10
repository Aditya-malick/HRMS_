import React, { useState } from "react";
import axios from "axios";

const AddDepartmentForm = () => {
  const [formData, setFormData] = useState({
    dName: "",
    dId: "",
    maneger: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/departments/create", formData);
      alert("Department added successfully");
      setFormData({
        dName: "",
        dId: "",
        maneger: "",
        description: ""
      });
    } catch (err) {
      console.error("Error adding department:", err);
      alert("Something went wrong while adding department.");
    } 
  };

  return (
    <>
      <div className="relative w-full h-screen ">
      <div className="relative z-10 h-[10%]  ml-20  mr-20">
        <div className=" flex top-0 shadow-2xl rounded-3xl items-center border-2 border-gray-400  justify-between mt-5 bg-[#F9F9F9]  p-4 ">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">Welcome, Hr</h1>
          <button className="px-4 py-2 text-white bg-purple-600 border border-gray-600 rounded hover:bg-purple-700">Logout</button>
        </div>
      </div>

        
            <h2 className="mb-6 mt-4 text-3xl font-bold text-center text-purple-700">Add Department</h2>

          <div className=" flex p-2 justify-center h-[90%]  ml-20  mr-20 rounded-tl-[50px] rounded-tr-[50px] bg-gradient-to-t from-white to-purple-500   border-gray-400 border-4 overflow-y-scroll">

            <form onSubmit={handleSubmit} className="w-[50%] p-5 bg-white bg-opacity-50 shadow-md shadow-gray-500 rounded-3xl">
              
              <label htmlFor="dName" className="block mb-2 font-medium">Department Name</label>
              <input
                type="text"
                name="dName"
                placeholder="Department Name"
                 className="w-full  p-2 mb-4 border rounded shadow-sm opacity-50 shadow-black"
                value={formData.dName}
                onChange={handleChange}
                required
              />
              <label htmlFor="dId" className="block mb-2 font-medium">Department ID</label>
              <input
                type="text"
                name="dId"
                placeholder="Department ID"
                 className="w-full  p-2 mb-4 border rounded shadow-sm opacity-50 shadow-black"
                value={formData.dId}
                onChange={handleChange}
                required
              />
              <label htmlFor="maneger" className="block mb-2 font-medium">Manager Name or ID</label>
              <input
                type="text"
                name="maneger"
                placeholder="Manager Name or ID"
                 className="w-full  p-2 mb-4 border rounded shadow-sm opacity-50 shadow-black"
                value={formData.maneger}
                onChange={handleChange}
              />
              <label htmlFor="description" className="block mb-2 font-medium">Description</label>
              <textarea
                name="description"
                placeholder="Description"
                className="w-full  p-2 mb-4 border rounded shadow-sm opacity-50 shadow-black h-[35%]"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>

              <button
                type="submit"
                className="w-full py-2 text-white transition bg-purple-600 rounded hover:bg-purple-700 bg-gradient-to-r from-purple-500 to-purple-800 animate-gradient"
              >
                Add Department
              </button>
            </form>
          </div>
        </div>

    
    </>
  );
};

export default AddDepartmentForm;

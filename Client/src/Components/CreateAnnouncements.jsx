import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { FaUsers } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
import { GrAnnounce } from "react-icons/gr";
import { MdAddCard } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { MdAddBusiness } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";

const CreateAnnouncement = () => {
  const [formData, setFormData] = useState({
    title: "",
    massage: "",
    targate: "All",
  });

  const Navigate = useNavigate()
    const [details, setDetails] = useState([]);
  
    const handleClick = (data) => {
      const departmentName = data.dName
      Navigate(`/employeelist/${departmentName}`)
    };
  
    const handlePerform = () => {
      const role = "HR"
      Navigate(`/ViewAnnouncements/${role}`)
  
    }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/announcement/create", formData);
      toast.success('Announcement created')
      setFormData({ title: "", massage: "", targate: "All" });
    } catch (err) {
      console.error("Error creating announcement:", err);
      toast.error("Something went wrong Please try again")
    }
  };

  return (
    <div className="relative w-full h-screen">
      <div className="relative z-10 h-[10%]  ml-20  mr-20">
        <div className=" flex top-0 shadow-2xl rounded-3xl items-center border-2 border-gray-400  justify-between mt-5 bg-[#F9F9F9]  p-4 ">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">Welcome, Hr</h1>
          <button className="px-4 py-2 text-white bg-purple-600 border border-gray-600 rounded hover:bg-purple-700">Logout</button>
        </div>
      </div>
       
      <div className=" flex p-5 justify-center h-[90%] mt-4  ml-20  mr-20 rounded-tl-[50px] rounded-tr-[50px] bg-gradient-to-t from-white to-purple-500   border-gray-400 border-4 ">
        <form
          onSubmit={handleSubmit}
          className="w-[70%] p-5 bg-white bg-opacity-50 shadow-md shadow-gray-500 rounded-3xl  "
        >
          <h2 className="mb-4 text-2xl font-bold text-center    text-purple-700">
            Create Announcement
          </h2>

          <label className="block mb-2 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full  p-2 mb-4 border rounded shadow-sm opacity-50 shadow-black"
          />

          <label className="block mb-2 font-medium">Message</label>
          <textarea
            name="massage"
            value={formData.massage}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border rounded shadow-sm opacity-50 shadow-black h-[40%]"
            rows={4}
          />

          <label className="block mb-2 font-medium">Target Audience</label>
          <select
            name="targate"
            value={formData.targate}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded shadow-sm opacity-50 shadow-black"
          >
            <option value="All">All</option>
            <option value="Employee">Employee</option>
            <option value="Manager">Manager</option>
          </select>

          <button
            type="submit"
            className="w-full py-2 text-white transition bg-purple-600 rounded hover:bg-purple-700 bg-gradient-to-r from-purple-500 to-purple-800 animate-gradient"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAnnouncement;

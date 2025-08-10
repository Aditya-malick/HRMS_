import React, { useState } from 'react';
import { FaUser, FaMoneyCheckAlt, FaCalendarCheck } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
// import { GrAnnounce } from "react-icons/gr";
import { MdAddCard } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { MdAddBusiness } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { useUser } from '../UserContext';
import axios from 'axios';
import toast from 'react-hot-toast';




const EmployeeDashboard = () => {
  const Navigate = useNavigate();
const [mode, setMode] = useState('Office');
const userData = JSON.parse(localStorage.getItem("userInfo"))
const employeeId = userData.employeeId
  const handleAnnouncement = () => {
    const role = "Employee";
    Navigate(`/ViewAnnouncements/${role}`);
  };

  const handleAttendance = () => {
    Navigate(`/Attendance/${employeeId}`);
  };

  const handleCheckIn = async () => {
    try {
      const res = await axios.post('http://localhost:8080/api/attendance/mark', {
        employeeId,
        mode,
      });
      toast.success(res.data.message)
    } catch (err) {
      console.error("Check-in failed", err);
    }
  };

  // Handle Check-Out
  const handleCheckOut = async () => {
    try {
      
      const res = await axios.post('http://localhost:8080/api/attendance/mark', {
        employeeId,
      });
      toast.success(res.data.message)
    } catch (err) {
      console.error("Check-out failed", err);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Blurry Gradient Background */}
      <div className="relative  inset-0 z-0 bg-gradient-to-r from-purple-300 via-bg-[#f107a3] to-bg-[#00d2ff]  opacity-70 blur-2xl"></div>

      {/* Actual Dashboard Content (above the background) */}
      <div className="z-10 flex min-h-screen ">
        {/* Sidebar */}
        <aside className=" shadow-2xl border-2 border-gray-400 w-64 p-6 m-3 space-y-4 bg-[#F9F9F9] bg-opacity-30 backdrop-blur-md rounded-3xl ">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black via-pink-500 to-purple-600 animate-gradient">HRMS Employee</h2>
          <nav className="space-y-4 font-medium ">
            <Link
              to=""
              className="flex items-center gap-2 px-3 py-2 border border-gray-400 rounded hover:bg-purple-400"
            >
              <LuLayoutDashboard className="text-purple-700" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient">
                Dashboard
              </span>
            </Link>
            <Link
              to='/Profile'
              className="flex items-center gap-2 px-3 py-2 border border-gray-400 rounded hover:bg-purple-400"
            >
              <LuLayoutDashboard className="text-purple-700" />
              <span

                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient">
                My Profile
              </span>
            </Link>
            <Link
              to=""
              className="flex items-center gap-2 px-3 py-2 border border-gray-400 rounded hover:bg-purple-400"
            >
              <BsCashCoin className="text-purple-700" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient">
                Payroll
              </span>
            </Link>
            <Link
              to="/ApplyLeave"
              className="flex items-center gap-2 px-3 py-2 border border-gray-400 rounded hover:bg-purple-400"
            >
              <MdAddBusiness className="text-purple-700" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient">
                Leave Status
              </span>
            </Link>

            <Link
              to=""
              className="flex items-center gap-2 px-3 py-2 border border-gray-400 rounded hover:bg-purple-400"
            >
              <MdAddBusiness className="text-purple-700" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient">
                Assinged Tasks
              </span>
            </Link>

            <button onClick={handleAnnouncement} className="flex items-center w-full gap-2 px-3 py-2 border border-gray-400 rounded hover:bg-purple-400"> <MdAddCard className="text-purple-700" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient">
              Announcements
              </span>
            </button>
            
            <button onClick={handleAttendance} className="flex items-center w-full gap-2 px-3 py-2 border border-gray-400 rounded hover:bg-purple-400"> <MdAddCard className="text-purple-700" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient">Attendance</span></button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-64 bg-red-200 h-screen p-4">
          <div className="flex shadow-2xl rounded-3xl items-center border-2 border-gray-400  justify-between mb-6 bg-[#F9F9F9] bg-opacity-30 p-6 ">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">
              Wecome, {userData.firstname}
            </h1>

            <button className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700"
            >
              Logout
            </button>
          </div>
          <div className='h-[80%]'>
            <div className="text-sm text-gray-600">Today: {new Date().toLocaleDateString()}</div>
            <section className="grid grid-cols-1 gap-6 md:grid-cols-3 bg-red-800 h-[45%] ">
              <div className="flex items-center p-6 space-x-4 bg-white rounded-lg shadow-md">
                <FaUser className="text-3xl text-purple-600" />
                <div>
                  <h3 className="text-lg font-semibold">Todo</h3>
                  <p className="text-sm text-gray-600">View Todo</p>
                </div>
              </div>

              <div className="flex items-center p-6 space-x-4 bg-white rounded-lg shadow-md">
                <FaMoneyCheckAlt className="text-3xl text-green-600" />
                <div>
                  <h3 className="text-lg font-semibold">Performence</h3>
                  <p className="text-sm text-gray-600">Graph</p>
                </div>
              </div>

              <div className="flex items-center p-6 space-x-4 bg-white rounded-lg shadow-md">
                <FaCalendarCheck className="text-3xl text-blue-600" />
                <div >
                  <h3 className="text-lg font-semibold">Task </h3>
                  <p className="text-sm text-gray-600">Graph</p>
                </div>
              </div>
            </section>
            <section className='w-full bg-red-50 h-[55%] flex py-5'>

              <div className='w-[35%] h-full bg-blue-200'>
                <div className="p-4 mb-6 h-full bg-white rounded shadow">
                  <h1 className='text-center font-bold text-[25px]'>Mark Attendence</h1>
                  <div className="mb-4 mt-6">
                    <label className="block mb-1">Work Mode</label>
                    <select
                      value={mode}
                      onChange={(e) => setMode(e.target.value)}
                      className="w-full px-3 py-2 border rounded h-[50px]"
                    >
                      <option value="Office">Office</option>
                      <option value="Remote">Remote</option>
                    </select>
                  </div>

                  <div className="flex w-full items-center justify-between mt-9">
                    <button
                      onClick={handleCheckIn}
                      className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
                    >
                      Check In
                    </button>

                    <button
                      onClick={handleCheckOut}
                      className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
                    >
                      Check Out
                    </button>
                  </div>
                </div>
              </div>
              <div className='w-[65%] h-full bg-slate-200'>

              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmployeeDashboard;

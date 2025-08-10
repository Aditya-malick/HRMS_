import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeAttendance = () => {
  const [attendanceList, setAttendanceList] = useState([]);
 
 // Fetch attendance history on page load
  
  const fetchAttendance = async () => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    const employeeId = user.employeeId;
    
    try {
      console.log("EmployeeId id = ",employeeId)
      const res = await axios.get(`http://localhost:8080/api/attendance/employee/EMP1001`);
      console.log(res.data)
      setAttendanceList(res.data);
    } catch (err) {
      console.error("Failed to fetch attendance", err);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  return (
    <div className="relative w-full h-screen">

      <div className="relative z-10 h-[10%]  ml-20  mr-20">
        <div className=" flex top-0 shadow-2xl rounded-3xl items-center border-2 border-gray-400  justify-between mt-5 bg-[#F9F9F9]  p-4 ">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">Welcome, Hr</h1>
          <button className="px-4 py-2 text-white bg-purple-600 border border-gray-600 rounded hover:bg-purple-700">Logout</button>
        </div>
      </div>

      <h3 className="mb-2 text-lg font-semibold">Your Attendance History</h3>

      <div className=" flex p-2 justify-center h-[90%]  ml-20  mr-20 rounded-tl-[50px] rounded-tr-[50px] bg-gradient-to-t from-white to-purple-500   border-gray-400 border-4 overflow-y-scroll">
        {attendanceList.length === 0 ? (
          <p>No attendance records found.</p>
        ) : (
          <table className="w-full overflow-hidden text-left border border-gray-300 rounded">
            <thead className="bg-purple-100">
              <tr>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Check-In</th>
                <th className="px-4 py-2 border">Check-Out</th>
                <th className="px-4 py-2 border">Mode</th>
              </tr>
            </thead>
            <tbody>
              {attendanceList.map((entry) => (
                <tr key={entry._id} className="transition hover:bg-gray-100">
                  <td className="px-4 py-2 border">
                    {new Date(entry.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 border">
                    {entry.checkIn ? new Date(entry.checkIn).toLocaleTimeString() : '—'}
                  </td>
                  <td className="px-4 py-2 border">
                    {entry.checkOut ? new Date(entry.checkOut).toLocaleTimeString() : '—'}
                  </td>
                  <td className="px-4 py-2 border">{entry.mode || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>

        )}
      </div>
    </div>
  );
};

export default EmployeeAttendance;

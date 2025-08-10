import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Model from "../model";

const ViewAnnouncements = () => {
  const navigate = useNavigate()
  const { role } = useParams();
  const [announcements, setAnnouncements] = useState([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const [portal, setPortal] = useState(false)

  const handleClick = () => {
    navigate('/CreateAnnouncement')
  }

  const handleNavigate = () => {
    navigate('/CreateAnnouncement')
  }
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/announcement/${role}`);
        setAnnouncements(res.data.result);
      } catch (err) {
        console.error("Error fetching announcements:", err);
        alert("Failed to load announcements.");
      }
    };

    fetchAnnouncements();
  }, [role]);

  return (
    <div className="relative w-full h-screen">
      <div className="relative z-10 h-[10%]  ml-20  mr-20">
        <div className=" flex top-0 shadow-2xl rounded-3xl items-center border-2 border-gray-400  justify-between mt-5 bg-[#F9F9F9]  p-4 ">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">Welcome, Hr</h1>
          {role === "HR" && (
        <button onClick={handleNavigate} className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">Add Announcement</button>

      )}
          <button className="px-4 py-2 text-white bg-purple-600 border border-gray-600 rounded hover:bg-purple-700">Logout</button>
        </div>
      </div>
      
      <h2 className="mb-6 mt-4 text-3xl font-bold text-center text-purple-700">
        Announcements for {role}
      </h2>
      <div className=" flex p-2 justify-center h-[90%]  ml-20  mr-20 rounded-tl-[50px] rounded-tr-[50px] bg-gradient-to-t from-white to-purple-500   border-gray-400 border-4 overflow-y-scroll">

        {announcements.length === 0 ? (
          <p className="text-center text-gray-500">No announcements found.</p>
        ) : (
          <div className="mt-2">
            {announcements.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between gap-4 p-5 m-4 border-t-4 border-indigo-500 rounded-lg shadow-md bg-white  w-[100%]"
              >
                <p className="mt-1 text-xs text-gray-400">
                  Date: {new Date(item.date).toLocaleString()}
                </p>

                <h3 className="text-lg font-bold text-gray-800">Title: {item.title}</h3>

                {role === "HR" && (<p className="mt-2 text-sm text-purple-600">
                  Target: {item.targate}
                </p>)}
                
                <button className="py-0.5 px-5 text-white rounded text-sm bg-purple-400 hover:rounded-lg border-pink-300 border-solid " onClick={() => { setSelectedAnnouncement(item); setPortal(true) }}>View</button>
                {portal && selectedAnnouncement && (
                  <Model onClose={() => {
                    setPortal(false);
                    setSelectedAnnouncement(null);
                  }}>
                    <div className="m-5">
                      <h1 className="mb-2 text-3xl font-bold text-gray-800">Title: {selectedAnnouncement.title}</h1>
                      <hr />
                      <p className="mt-2 text-sm text-gray-600">Message: {selectedAnnouncement.massage}</p>
                      <div className="fixed bottom-0 flex justify-between px-1 mb-2 bg-gray-200 w-[94%]">
                        <p className="font-bold text-black-600 text-md">
                          Target: {selectedAnnouncement.targate}
                        </p>
                        <p className="mt-1 text-lg text-gray-400 ">
                          Date: {new Date(selectedAnnouncement.date).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </Model>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default ViewAnnouncements;

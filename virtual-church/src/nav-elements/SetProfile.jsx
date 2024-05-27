import { Link } from "react-router-dom";

import React, { useState } from 'react';
const SetProfile = () => {
  const [churchName, setChurchName] = useState('');
  const [location, setLocation] = useState('');
  const [meetingDay, setMeetingDay] = useState('Sunday');
  const [denomination, setDenomination] = useState('Presbyterian');
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const profileData = {
      churchName,
      location,
      meetingDay,
      denomination,
      fromTime,
      toTime,
    };
    console.log('Profile Created:', profileData);
    
  };

  return (
    <div className="flex items-center justify-center bg-cyan-950 text-cyan-100">
      <div className="bg-cyan-900 p-12 rounded-xl">
        <h1 className="text-2xl font-bold mb-6">Create Virtualchurch Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className=" scroll-m-6 block text-cyan-100">Your Church Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              value={churchName}
              onChange={(e) => setChurchName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-cyan-100">Location</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-cyan-100">Meeting Days</label>
            <select
              className="w-full px-3 py-2 border rounded-md text-cyan-900"
              value={meetingDay}
              onChange={(e) => setMeetingDay(e.target.value)}
            >
              <option value="Monday">Monday</option>
              <option value="turseday">turseday</option>
              <option value="Wesenday">wedsenday</option>
              <option value="thurday">thurday</option>
              <option value="frienday">frienday</option>
              <option value="saturday">saturday</option>
              <option value="sunday">sunday</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-cyan-100">Denomination</label>
            <select
              className=" scroll-m-6 w-full px-3 py-2 border rounded-md text-cyan-900"
              value={denomination}
              onChange={(e) => setDenomination(e.target.value)}
            >
              <option value="Presbyterian">Presbyterian</option>
              <option value="Adventist">Adventist</option>
              <option value="Islam">Islam</option>
              <option value="church Of God">Church Of God</option>
              <option value="Assemblies of God">Assemblies of God</option>
              <option value="others">others</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-cyan-100">From</label>
            <input
              type="time"
              className="w-full px-3 py-2 border rounded"
              value={fromTime}
              onChange={(e) => setFromTime(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-cyan-100">To</label>
            <input
              type="time"
              className=" flex justify-end w-[100%] px-3 py-2 border rounded"
              value={toTime}
              onChange={(e) => setToTime(e.target.value)}
            />
          </div>
          <Link to="/dashboard">
            <button className="bg-yellow-400 p-4 rounded-md hover:scale-95 duration-200 ease-in-out">
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SetProfile;

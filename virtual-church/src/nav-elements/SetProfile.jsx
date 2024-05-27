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
    <div className="min-h-screen flex items-center justify-center bg-cyan-950">
      <div className="bg-cyan-700 p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Create Virtualchurch Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className=" scroll-m-6 block text-cyan-900">Your Church Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={churchName}
              onChange={(e) => setChurchName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Meeting Days</label>
            <select
              className="w-full px-3 py-2 border rounded"
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
            <label className="block text-gray-700">Denomination</label>
            <select
              className=" scroll-m-6 w-full px-3 py-2 border rounded"
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
            <label className="block text-gray-700">From</label>
            <input
              type="time"
              className="w-full px-3 py-2 border rounded"
              value={fromTime}
              onChange={(e) => setFromTime(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">To</label>
            <input
              type="time"
              className=" flex justify-end w-[100%] px-3 py-2 border rounded"
              value={toTime}
              onChange={(e) => setToTime(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="flex-col items-center justify-center">
            <button className = "bg-cyan-950 text-white px-10 py-3"
          >
            Create
            </button>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetProfile;

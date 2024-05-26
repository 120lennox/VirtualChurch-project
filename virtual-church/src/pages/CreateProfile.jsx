import React from 'react';

const CreateChurchProfile = () => {
  return (
    <div className="flex-col flex justify-center items-center h-screen bg-white py-0.5">
      <div className="bg-cyan-900 px-24 py-24 min-h-full rounded-md">
        
        <h2 className="text-2xl font-bold mb-10 text-white pl-[10%] ">Create Church Profile</h2>
        <p className="text-cyan-100 mb-6 pl-[10%] text-center">
             Welcome <br />  Worshipping<br /> Growing together
        </p>
        <div className='pl-[10%]'>
        <button className="flex flex-row items-center m-6 bg-yellow-400 text-white py-2 px-20 rounded-md hover:bg-yellow-700">
          Create
        </button>
        </div>
         <div className="mt-8 border-t border-gray-300 pt-6">
          <p className="flex justify-center items-center text-cyan-100">or
          </p>
          <p htmlFor="code" className="flex items-center pl-[20%] text-cyan-100 font-bold mb-2">
            Join VirtualChurch
          </p>
          <div className="flex">
          <div className='bg-gray-400 rounded-l-md p-2'>Enter Code</div>

            <input
            
              placeholder="eg inf group28"
              className="flex justify-center flex-grow border border-gray-300 rounded-md py-2 px-4"
            />
            </div>
            <div className='pl-[10%]'>
            <button className="bg-yellow-400 items-center p-10 m-10 text-white py-2 px-20 rounded-md hover:bg-yellow-700 transition-colors duration-300">
              Join
            </button>
            </div>

          
        </div>
      </div>
    </div>
  );
};

export default CreateChurchProfile;
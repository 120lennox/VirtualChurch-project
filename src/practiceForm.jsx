import { CgProfile } from "react-icons/cg";
import { MdLock } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import React, { useState, useRef } from 'react';

/*signUpForm component definition with onSubmit as argument
 which will be called when form is submitted*/
 
const Signup = ({ onSubmit }) => {
     /* Definition of state variables which will store user input
   using the useState hook*/
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

//Function to handle user input change.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'fullName':
        setFullName(value);
        break;
      case 'email': 
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
        
      default:
        break;
    }
  };
  // Creation of  a reference to the password input field
  const passwordRef = useRef();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // validating user input, making sure the user inputs the right format on feilds.
    const newErrors = {};
    const fullNameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
    if (!fullName) newErrors.fullName = 'Full name is required.';
    else if (!fullNameRegex.test(fullName))newErrors.fullName ='First and second name should start with a capital letter';
    if (!email) newErrors.email = 'Email is required.';
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) newErrors.email = 'Invalid email format.';
    if (!password) newErrors.password = 'Password is required.';
    else if(password.length < 8) newErrors.password = 'password must be atleast 8 characters long';
    
  
    // If there are errors, update the state with the new errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    }else{
      // if there are no errors, cll the parent component function.
      onSubmit({ fullName, email, password });
    }
  };
    
    return  (
        <div className="flex justify-center items-center h-full">
            <div className="container w-3/5 justify-center items-center flex flex-col bg-cyan-900 rounded mx-auto mt-10 mb-10 px-1 py-8  ">
                <div><p className="text-gray-100 mb-8 text-4x1 ">Connect to VCMS</p> </div>
                <div><p className="text-gray-100 text-poppins-700 font-bold  mb-2 text-custom-size">Create Your Profile</p></div>
                <div><p className="text-yellow-500 text-xs sm:text-4x1 ">By creating your profile, you unlock the full potential of our platform. </p></div>
                <div className="space-x-4 mt-16">
                   <CgProfile className="inline-block gray-300"/>
                   <label className=" FullName inline-block text-gray-300 text-poppins-700 text-3x1 font-semibold ">FullName</label>
                   <input className="inline-block py-1 px-1 w-60 rounded-md outline-none bg-slate-200 " type="text" id="First Name" placeholder="e.g Lenoil Amulus" onChange={(e) => setFullName(e.target.value)} value={fullName}></input>
                   <div className="mt-1 justify-center flex items-center mb-1 ">
                   {errors.fullName && <p className=" text-orange-600" >{errors.fullName}</p>}                   
                   </div>
                    </div>
                    <div className="space-x-8 mt-10 mx-4 ">
                   <MdOutlineMailOutline className="inline-block"/>
                   <label className=" Email inline-block text-gray-300 text-poppins-700 text-3x1 font-semibold ">Email</label>
                   <input className="inline-block py-1 px-1 w-60 rounded-md outline-none  bg-slate-200 " type="text" id="Email" placeholder="LenoilAmulus@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                   <div className="mt-1 justify-center flex items-center mb-1 ">                   
                   {errors.email && <p class=" text-orange-600 ">{errors.email}</p>}
                   </div>
                    </div> 
                    <div className="space-x-4 mt-10  ">
                    <MdLock className="inline-block"/>  
                   <label className=" Password inline-block text-gray-300 text-poppins-700 text-3x1 font-semibold ">Password</label>
                   <input className="inline-block py-1 px-1 w-60 rounded-md outline-none  bg-slate-200 " type="password" id="Password" onChange={(e) => setPassword(e.target.value)} ref={passwordRef} value={password} htmlFor="Passord"></input>
                    <div className="mt-1 justify-center flex items-center mb-1">
                   {errors.password && <p class=" text-orange-600 ">{errors.password}</p>}
                   </div>
                    </div>
                    <div className="mt-10">
                        <p className="text-gray-400">By continuing you agree to our<a className="font-bold text-lime-400 underline"  href='#'>Terms of service</a> and <a className="font-bold text-lime-400 underline" href="#"> Privacy policy</a></p>
                    </div>
                    <div>
                        <button className="flex flex-row items-center bg-cyan-600 rounded-md mt-10  py-2 px-10 mb-5 hover:scale-90 duration-200 ease-in-out" type="submit" ><p className="font-semibold text-lime-300" onClick={handleSubmit}>Create Profile</p></button>
                        
                    </div>
                    <div>
                    <p className="text-gray-400 mb-5">or</p>
                    </div>
                    <div>
                    <button className=" flex flex-row items-center border-lime-500 border-2 bg-transparent outline-4 rounded-md py-2 px-10  hover:scale-90 duration-200 ease-in-out"><p className="text-gray-400 font-semibold ">Continue with<FcGoogle className="inline-block" /></p></button>
                    </div>
                    <div>
                        <p className="text-gray-400 mt-5">Already have an account? <a href="#" className="font-bold underline text-lime-400  ">SignIn</a></p>
                    </div>
                    
            </div>
        </div>

    );
};
export default Signup;
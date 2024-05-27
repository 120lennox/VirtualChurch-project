import { FcGoogle } from "react-icons/fc";
import React, { useState, useRef } from 'react';
import NavBar from "./Nav_bar";
import { Link } from "react-router-dom";

export default function Signup(){
    /*Definition of state variables which will store user input
   using the useState hook*/
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});


  // Creation of  a reference to the password input field
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // validating user input, making sure the user inputs the right format on feilds.
    const newErrors = {};
    const fullNameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
    if (!fullName) newErrors.fullName = 'Full name is required.';
    else if (!fullNameRegex.test(fullName))newErrors.fullName ='Incorrect format';
    if (!email) newErrors.email = 'Email is required.';
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) newErrors.email = 'Invalid email format.';
    if (!password) newErrors.password = 'Password is required.';
    else if(password.length < 8) newErrors.password = 'password must be atleast 8 characters long';
    
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Exit function if there are errors
    }

   
    console.log("Signup successful:", { fullName, email, password });

    // Redirect to login page after successful signup
    navigate("/login");
  };
    return (
        <main className="bg-cyan-100 dark:bg-cyan-950 min-h-screen font-poppins">
            <div>
                <NavBar />
            </div>
            <section className="max-w-4xl mx-auto mt-8">
                <div className="flex justify-center items-center">
                    <div className="bg-cyan-900 rounded-lg text-cyan-50 flex flex-col justify-center items-center p-12">

                        <div className="mb-5">
                            <p className="text-3xl font-semibold">Connect to VCMS</p>
                        </div>

                        <div className="mt-4">
                            <p className="text-lg">Create Your Profile</p>
                        </div>

                        <div className="mt-4">
                            <p className="text-yellow-400 text-sm sm:text-4x1 ">By creating your profile, you unlock the full potential of our platform. </p>
                        </div>
                        <div className="space-x-4 mt-8 flex flex-row items-center">
                            <label className="text-lg text-cyan-100">Name </label>
                            <input className="text-center rounded-md py-2 px-6 text-cyan-950" type="text" id="First Name" placeholder="e.g Lenoil Amulus" onChange={(e) => setFullName(e.target.value)} value={fullName} />

                            <div className="text-red-500 flex flex-col">
                                {errors.fullName && <p className="" >{errors.fullName}</p>}                   
                            </div>
                        </div>
                        <div className="mt-8 flex flex-row items-center space-x-4">
                            <label className="">Email</label>
                            <input className="text-center rounded-md py-2 px-6 text-cyan-950" type="text" id="Email" placeholder="LenoilAmulus@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                            <div className="mt-1 justify-center flex items-center mb-1 ">                   
                            {errors.email && <p class=" text-red-600 duration-200 ease-in-out">{errors.email}</p>}
                            </div>
                        </div> 
                        <div className="space-x-4 mt-10 flex flex-row">
    
                            <label className="">Password</label>
                            <input className="text-cyan-950 rounded-md py-2 px-6" type="password" id="Password" onChange={(e) => setPassword(e.target.value)} ref={passwordRef} value={password} htmlFor="Passord" />

                            <div className="mt-1 justify-center flex items-center mb-1">
                            {errors.password && <p class=" text-red-600 ">{errors.password}</p>}
                        </div>
                            </div>
                            <div className="mt-10">
                                <p className="text-cyan-200">By continuing you agree to our <Link className="font-bold text-yellow-400 hover:underline">Terms of service</Link> and <Link className="font-bold text-yellow-400 hover:underline"> Privacy policy</Link></p>
                            </div>
                            <div>
                                <button className="flex flex-row items-center bg-cyan-600 rounded-md mt-10  py-2 px-10 mb-5 hover:scale-90 duration-200 ease-in-out" type="submit" ><p className="font-semibold text-cyan-50" onClick={handleSubmit}>Create Profile</p></button>
                                
                            </div>
                            <div>
                            <p className="text-gcyan-200 mb-5">or</p>
                            </div>
                            <div>
                            <button className=" flex flex-row items-center border-yellow-400 border-2 bg-transparent outline-4 rounded-md py-2 px-10  hover:scale-90 duration-200 ease-in-out"><Link className="text-cyan-100 font-semibold ">Continue with <FcGoogle className="inline-block" /></Link></button>
                            </div>
                            <div className="flex flex-row mt-5 space-x-2">
                                <p className="text-cyan-200">Already have an account?</p>
                                <Link className="text-yellow-400 font-semibold hover:underline" to="/login">Login</Link>
                            </div>          
                    </div>
                </div>
            </section>
        </main>  
    )
}

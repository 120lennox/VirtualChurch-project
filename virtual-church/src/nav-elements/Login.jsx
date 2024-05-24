import { FcGoogle } from "react-icons/fc"
import { FaKey } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function Login(){
    return (
        <div className="flex justify-center items-center bg-cyan-950 h-full ">
            <div className="bg-cyan-900 rounded-md px-1 py-8 mt-20 mb-60 w-3/5 justify-center items-center ">
                <div className="flex flex-col justify-center items-center">
                    <div className="mb-5">
                        <h1 className="font-bold text-3xl sm:text-4xl text-gray-300 ">Signin</h1>
                    </div>
                    <div className="space-x-4 mt-8">
                    <CgProfile className="inline-block"/>
                        <label className="text-gray-300 font-semibold" htmlFor="username">Username</label>
                        <input className="py-1 px-1 w-60  rounded-md outline-none bg-slate-200 " type="text" id="username" placeholder="e.g Lenoil Amulus" />
                    </div>
                    
                    <div className="space-x-4 mt-8">
                    <FaKey className="inline-block" />
                        <label className="text-gray-300 font-semibold" htmlFor="password">Password</label>
                        <input className="py-1 px-1 w-60  rounded-md outline-none bg-slate-200" type="password" id="password" />
                    </div>
                    <div className="mt-8 flex flex-row space-x-1 text-cyan-100">                     
                        <input className="rounded-md" type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">remember me </label>
                    </div>
                    <div>
                        <button className="flex flex-row items-center bg-cyan-600 rounded-md mt-10  py-2 px-10 mb-5 hover:scale-90 duration-200 ease-in-out" type="submit" ><p className="font-semibold text-lime-300" >SignIn</p></button>
                        
                    </div>
                    
                    <div className="mt-5 mb-5 ">
                        <p className="text-gray-300 font-semibold">or</p>
                    </div>
                    <div>
                    <button className=" flex flex-row items-center border-lime-500 border-2 bg-transparent outline-4 rounded-md py-2 px-10 space-x-4  hover:scale-90 duration-200 ease-in-out">
                      <p className="text-gray-400 font-semibold ">Continue with</p>
                      <FcGoogle className="inline-block" />
                      </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
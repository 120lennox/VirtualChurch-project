import { FaLocationDot } from "react-icons/fa6";
import Sidebar from "../Sidebar";
import Notification from "./Notification";

export default function Registration(){
    return (
        <main aria-label="main-container" className="flex text-cyan-950 dark:text-cyan-50 font-poppins" >
            <section aria-label="submain-container" className="min-h-screen w-full bg-cyan-100 dark:bg-cyan-950">
                <div aria-label="width-definition" className="max-w-7xl mx-auto mt-10 flex flex-row justify-between">
                    <div className="bg-cyan-900 p-14 shadow-lg rounded-3xl">
                        <Sidebar />
                    </div>
                    <div className="bg-cyan-950 p-12 rounded-md">
                    <section aria-label="user-registration-form" className="bg-cyan-900 rounded-xl font-poppins p-14">
                        <div aria-label="item-align" className="flex flex-col justify-center items-center">
                            <div>
                                <h1 className="font-semibold text-2xl mb-5">
                                    Member Registration
                                </h1>
                            </div>
                            <div className="">
                            <form action="">
                                <div className="p-5 flex flex-col justify-center items-center relative">
                                        <input type="text" id="username" className="bg-cyan-900 px-12 py-2 border-b focus:outline-none focus:border-yellow-500 peer transition-colors" />
                                        <label htmlFor="username" className="absolute left-7 text-cyan-200 text-sm peer-focus:text-xs peer-focus:top-3 duration-500 transition-all">Full Name</label> 
                                    </div>

                                    <div className="p-5 flex flex-col justify-center items-center relative">
                                        <input type="text" id="Location" className="bg-cyan-900 px-12 py-2 border-b focus:outline-none focus:border-yellow-500 peer transition-colors" />
                                        <label htmlFor="Location" className="absolute left-7 text-cyan-200 text-sm peer-focus:text-xs peer-focus:top-3 duration-500 transition-all">Location</label> 
                                    </div>

                                    <div className="p-5 flex flex-col justify-center items-center relative">
                                        <input type="text" id="pledge" className="bg-cyan-900 px-12 py-2 border-b focus:outline-none focus:border-yellow-500 peer transition-colors" />
                                        <label htmlFor="pledge" className="absolute left-7 text-cyan-200 text-sm peer-focus:text-xs peer-focus:top-3 duration-500 transition-all">Pledge No</label> 
                                    </div>

                                    <div className="flex flex-row space-x-16 mt-4 justify-center items-center mb-4">
                                        <div className="flex items-center space-x-1">
                                            <input name="option" type="radio" id="executive" className="h-4 w-4" />
                                            <label htmlFor="executive" className="text-lg text-cyan-100">Executive</label>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <input name="option" type="radio" id="member" className="h-4 w-4" />
                                            <label htmlFor="member" className="text-lg text-cyan-100" >Member</label>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="flex justify-center mt-10 bg-yellow-400 rounded-md shadow-md p-2 cursor-pointer hover:scale-105 duration-200">
                                        <input type="submit" value="Register" />
                                    </div>
                                    
                                </form>
                            </div>
                            <div></div>
                        </div>
                    </section>
                    </div>
                    <div className="bg-cyan-900 p-12 rounded-xl">
                            <Notification />
                    </div>
                </div>
            </section>
        </main>
    )
}
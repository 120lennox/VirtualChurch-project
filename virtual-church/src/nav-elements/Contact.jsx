import { FaFacebook, FaLinkedinIn  } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Contact(){
    return (
       <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-6 gap-x-12 mb-10">
            <div aria-label="contact-info" className="flex flex-col justify-between">
                <div className="mt-8 justify-center items-center sm:justify-start sm:items-start">
                    <h1 className="text-center sm:text-left font-bold text-3xl sm:text-4xl space-y-2">Contact Us</h1>
                    <p className="text-lg text-center sm:text-left text-cyan-100 mt-2 p-2">Get in touch with us for any queries or feedback</p>
                </div>
                <div className="flex justify-center items-center sm:justify-start sm:items-start text-cyan-100 mt-4 p-2 flex-col">
                    <p className="flex flex-row gap-x-2">
                        <span className="text-cyan-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </span>
                        vcms@admin.com
                    </p>
                    <p className="flex flex-row gap-x-2 mt-2">
                        <span>
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd"/>
                            </svg>
                        </span>
                        @vcms
                    </p>
                    <p className="flex flex-row gap-x-2 mt-2">
                        
                    </p>

                </div>
                <div className="flex flex-row mt-4 p-2 gap-x-2 justify-center sm:justify-start items-center sm:items-center">
                    <Link>
                        <span>
                        <RiWhatsappFill className="w-6 h-6 text-cyan-100"/>
                        </span>
                    </Link>
                    <Link>
                        <span>
                            <FaFacebook className="text-cyan-100" />
                        </span>
                    </Link>
                    <Link>
                        <span>
                         <FaLinkedinIn />
                        </span>
                    </Link>
                </div>
            </div>
            <div aria-label="contact-form" className="flex justify-center sm:justify-end">
                <div className="bg-cyan-900 rounded-md shadow-md p-2 sm:p-5">
                    <form action="">
                     <div className="p-5 flex flex-col justify-center items-center relative">
                            <input type="text" id="username" className="bg-cyan-900 px-12 py-2 border-b focus:outline-none focus:border-yellow-500 peer transition-colors" />
                            <label htmlFor="username" className="absolute left-7 text-cyan-200 text-sm peer-focus:text-xs peer-focus:top-3 duration-500 peer-focus:text-yellow-500 transition-all">Your name</label> 
                        </div>

                        <div className="p-5 flex flex-col justify-center items-center relative">
                            <input type="text" id="email" className="bg-cyan-900 px-12 py-2 border-b focus:outline-none focus:border-yellow-500 peer transition-colors" />
                            <label htmlFor="email" className="absolute left-7 text-cyan-200 text-sm peer-focus:text-xs peer-focus:top-3 peer-focus:text-yellow-500 duration-500 transition-all">Email</label> 
                        </div>

                        <div className="p-5 flex flex-col justify-center items-center relative">
                            <input type="text" id="message" className="bg-cyan-900 px-12 py-2 border-b focus:outline-none focus:border-yellow-500 peer  transition-colors" />
                            <label htmlFor="message" className="absolute left-7 text-cyan-200 text-sm peer-focus:text-xs peer-focus:top-3 peer-focus:text-yellow-500 duration-500 transition-all">Your message here</label> 
                        </div>
                        <div className="flex justify-center mt-6 bg-yellow-400 rounded-md shadow-md p-2 cursor-pointer hover:scale-75 duration-200">
                            <input type="submit" />
                        </div>
                        
                    </form>
                </div>
            </div>
       </div>
    )
}
import Sidebar from "../Sidebar"
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoPersonAddSharp } from "react-icons/io5";

export default function Manage(){
    return (
        <main aria-label="main-container" className="flex text-cyan-950 dark:text-cyan-50 font-poppins" >
            <section aria-label="submain-container" className="min-h-screen w-full bg-cyan-100 dark:bg-cyan-950">
                <div aria-label="width-definition" className="max-w-7xl mx-auto mt-10 flex flex-row justify-start space-x-16">
                    <div className="bg-cyan-900 p-14 shadow-md shadow-cyan-800 rounded-3xl">
                        <Sidebar />
                    </div>
                    <div className="bg-cyan-900 p-20 w-full shadow-md shadow-cyan-800 rounded-xl">
                        <div aria-label="main-container" className="flex flex-col">
                            <div className="flex justify-center items-center">
                                <h1 className="font-semibold text-2xl text-yellow-400">
                                Manage church
                                </h1>
                            </div>
                            <div className="flex flex-row justify-between mt-10">
                                <div className="flex flex-row items-center justify-between space-x-5">
                                    <button className="font-extrabold text-2xl">
                                        <IoMdArrowRoundBack />
                                    </button>

                                    <button className="font-extrabold text-2xl">
                                        <IoMdArrowRoundForward />
                                    </button>
                                </div>
                                <div className="">
                                    <button className="flex flex-row items-center bg-green-700 px-4 py-2 rounded-md hover:bg-green-400 ease-in-out duration-150"><IoPersonAddSharp /> Add Member</button>
                                </div>
                                <div>
                                    <input type="text" placeholder="search member" className="rounded-md px-5 py-2 text-center" />
                                </div>
                        </div>
                        
                        </div>
                        <hr className="mt-7" />
                        <div className="mt-3">
                            <table className="flex flex-col">
                                <tr className="flex flex-row justify-between space-x-36">
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Pledge No</th>
                                    <th>Status</th>
                                </tr>
                                <tr className="flex flex-row justify-between space-x-36">
                                    <td>JohnDoe</td>
                                    <td>John@doe.com</td>
                                    <td>MC04</td>
                                    <td>Member</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </section>
        </main>
    )
}
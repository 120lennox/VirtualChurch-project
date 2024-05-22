import Sidebar from "../Sidebar"
import Notification from "./Notification"
import { CiImageOn } from "react-icons/ci";
import { FaVideo } from "react-icons/fa6";
import { MdAddPhotoAlternate } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";

export default function Community(){
    return (
        <main aria-label="main-container" className="flex text-cyan-950 dark:text-cyan-50 font-poppins" >
            <section aria-label="submain-container" className="min-h-screen w-full bg-cyan-100 dark:bg-cyan-950">
                <div aria-label="width-definition" className="max-w-7xl mx-auto mt-10 flex flex-row justify-between">
                    <div className="bg-cyan-900 p-14 shadow-lg rounded-3xl">
                        <Sidebar />
                    </div>
                    <div aria-label="community-card" className="bg-cyan-950 p-5 rounded-md">
                        <div aria-label="width-definition" className="flex space-y-5 justify-center items-center flex-col z-50">
                            <div>
                                <div aria-label="header" className="bg-cyan-900 py-4 px-7 rounded-lg flex flex-col">
                                    <div className="flex flex-row justify-between items-center space-x-10">
                                        <div className="bg-cyan-800 p-4 rounded-full ">
                                            <CiImageOn className="text-4xl" />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="search post" className="text-center px-8 py-2 rounded-xl" />
                                        </div>
                                        <hr className="mt-5" />
                                    </div>
                                    <div aria-label="buttons" className="flex flex-row items-center space-x-24 mt-8 text-yellow-400">
                                        <button className="flex flex-row space-x-5 items-center hover:bg-cyan-600 py-2 px-4 hover:text-cyan-50 rounded-md">
                                        <MdPostAdd />create post
                                        </button>
                                        <button className="flex flex-row space-x-5 items-center hover:bg-cyan-600 py-2 px-4 hover:text-cyan-50 rounded-md">
                                            <MdAddPhotoAlternate /> Upload picture
                                        </button>
                                        <button className="flex flex-row space-x-5 items-center hover:bg-cyan-600 py-2 px-4 hover:text-cyan-50 rounded-md">
                                            <FaVideo /> Live Video
                                        </button>
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
                                <div></div>
                                <div></div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div  className="bg-cyan-900 p-12 rounded-xl">
                            <Notification />
                    </div>
                </div>
            </section>
        </main>
    )
}
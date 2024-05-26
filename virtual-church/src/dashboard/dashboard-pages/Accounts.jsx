import React, { useState } from 'react';
import Sidebar from "../Sidebar";
import Notification from "./Notification";
import { FaRegTrashCan } from "react-icons/fa6";

const Accounts = () => {
    const [accountDeleted, setAccountDeleted] = useState(false);
    const handleDeleteAccount = () => {
        setAccountDeleted(true);
    };

    return (
        <main aria-label="main-container" className="flex text-cyan-950 dark:text-cyan-50 font-poppins">
            <section aria-label="submain-container" className="min-h-screen w-full bg-cyan-100 dark:bg-cyan-950">
                <div aria-label="width-definition" className="max-w-5xl mx-auto mt-10 flex flex-row justify-between">
                    <div className="bg-cyan-900 p-14 shadow-lg rounded-3xl">
                        <Sidebar />
                    </div>
                    <div aria-label="Accounts" className="bg-cyan-950 p-5 rounded-md">
                        <div aria-label="width-definition" className="flex space-y-5 justify-center items-center flex-col z-50">
                            <div aria-label="header" className="bg-cyan-900 py-4 px-7 rounded-lg flex flex-col">
                                <div className="flex flex-row justify-between items-center space-x-10">
                                    <button className="w-full bg-blue-950 text-white py-2 px-4 rounded hover:bg-blue-700 mb-4">
                                        Logout
                                    </button>
                                    <button className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-600 mb-4 flex items-center justify-center"
                                        onClick={handleDeleteAccount}>
                                        <FaRegTrashCan className="mr-2" />
                                        Delete Account
                                    </button>
                                </div>
                                {accountDeleted && (
                                    <p>Your account has been deleted successfully!</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="bg-cyan-900 p-12 rounded-xl">
                        <Notification />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Accounts;

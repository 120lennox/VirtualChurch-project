import Sidebar from "../Sidebar"
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { GiExpense } from "react-icons/gi";
import { BiSolidDonateHeart } from "react-icons/bi";
import { TbReport } from "react-icons/tb";
import { FaDownload } from "react-icons/fa6";
export default function Tithing(){
    return (
        <main className="bg-cyan-950 w-screen h-screen " >
                    <div className=" flex flex-row space-x-8 justify-center items-center">
                    <div className="bg-cyan-900 w-60 sm:w-80 h-5/6 shadow-lg mt-10 mb-20 py-20 rounded-3xl ">
                        <Sidebar />
                    </div>
                   
                    <div className="flex flex-col mt-12 space-y-10  ">
                      <div className=" bg-cyan-900 h-56 w-40 rounded-lg flex-col flex  ">
                        <div className="mt-2 w-3/6 h-1/6 bg-yellow-500 rounded-md mx-2 inline-block">
                        
                        <p className="font-semibold text-gray-200 mx-1"><LiaBalanceScaleSolid />Balance</p>
                        </div>
                        <div className="mt-5 mx-2 mb-5">
                          <p  className="font-semibold text-gray-950 text-lg" aria-placeholder="balance">K0.00</p>
                        </div>
                        <div className="mt-5 mx-2 mb-5 inline-block">
                          <p className="text-gray-200 ">Balance as of date <IoIosArrowDropdown /> </p>
                        </div>
                      </div>
                      <div className=" bg-cyan-900 h-56 w-40 rounded-lg flex-col flex  " >
                        <div className=" mt-2 mx-2 w-3/6 h-1/6 rounded-md bg-yellow-500">
                          <p className="font-semibold text-gray-200 mx-1"> My tithe</p>
                        </div>
                        <div className=" mt-5 w-4/5 h-2/3 bg-cyan-500 rounded-md mx-5 inline-block">
                        <p className="font-semibold text-gray-200 mx-1 mt-8">This month K0.00</p>
                        <button className="rounded-md w-1/2 h-1/6 bg-cyan-800 mt-6 mx-14 mb-2"><p className="text-gray-200">History</p></button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col mt-12 space-y-10  ">
                      <div className=" bg-cyan-900 h-56 w-40 rounded-lg flex-col flex  ">
                      <div className="mt-2 w-3/6 h-1/6 bg-yellow-500 rounded-md mx-2 inline-block">
                      
                        <p className="font-semibold text-gray-200 mx-1"><FaHandHoldingUsd />Offerings</p>
                        </div>
                        <div className="mt-5 mx-2 mb-5">
                          <p  className="font-semibold text-gray-950 text-lg" aria-placeholder="balance">K0.00</p>
                        </div>
                        <div className="mt-5 mx-2 mb-5 inline-block">
                          <p className="text-gray-200 ">Balance as of date <IoIosArrowDropdown /> </p>
                        </div>
                      </div>
                      <div className=" bg-cyan-900 h-56 w-40 rounded-lg flex-col flex  " >
                      <div className=" mt-2 mx-2 w-3/6 h-1/6 rounded-md bg-yellow-500">
                          <p className="font-semibold text-gray-200 mx-1"><BiSolidDonateHeart />Pledges</p>
                        </div>
                        <div className=" mt-5 w-4/5 h-2/3 bg-cyan-500 rounded-md mx-5 inline-block">
                        <p className="font-semibold text-gray-200 mx-1 mt-8">This month K0.00</p>
                        <button className="rounded-md w-1/2 h-1/6 bg-cyan-800 mt-6 mx-14 mb-2"><p className="text-gray-200">History</p></button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col mt-12 space-y-10  ">
                      <div className=" bg-cyan-900 h-56 w-40 rounded-lg flex-col flex  ">
                      <div className="mt-2 w-3/6 h-1/6 bg-yellow-500 rounded-md mx-2 inline-block">
                      
                        <p className="font-semibold text-gray-200 mx-1"><GiExpense />Expenses</p>
                        </div>
                        <div className=" mt-2 w-3/4 h-1/3 bg-cyan-500 rounded-md mx-2 inline-block">                        
                         <p className="text-lg font-bold mx-2 mt-2 "><IoStatsChartSharp /></p>
                         <p className="text-gray-900 text-lg font-semibold ">K0.00</p>                                                 
                        </div>
                        <div className="mt-5 mx-2 mb-5 inline-block">
                          <p className="text-gray-200 ">Balance as of date <IoIosArrowDropdown /> </p>
                        </div>
                      </div>
                      <div className=" bg-cyan-900 h-56 w-40 rounded-lg flex-col flex  " >
                      <div className="mt-2 w-3/5 h-1/5 bg-yellow-500 rounded-md mx-2 inline-block">
                        
                        <p className="font-semibold text-gray-200"><TbReport />Report</p>
                        </div>
                      <div className="h-8 w-5/6 bg-cyan-500 rounded-md mt-5 mx-5 "><p className="text-gray-200 flex flex-row space-x-4 mt-1">2023-2024........<FaDownload /></p></div>
                      <div className="h-8 w-5/6 bg-cyan-500 rounded-md mt-5 mx-5 "><p className="text-gray-200 flex flex-row space-x-4 mt-1">2024-2025........<FaDownload /></p></div>
                      <div className="h-8 w-5/6 bg-cyan-500 rounded-md mt-5 mx-5 "><p className="text-gray-200 flex flex-row space-x-4 mt-1">2025-2026........<FaDownload /></p></div>
                      
                      </div>
                      
                    </div>
                    </div>
                    
              
        </main>
    )
}
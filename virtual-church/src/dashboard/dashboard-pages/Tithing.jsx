import Sidebar from "../Sidebar"
import { LiaBalanceScaleSolid } from "react-icons/lia";
export default function Tithing(){
    return (
        <main className="bg-cyan-950 w-screen h-screen " >
                    <div className=" flex flex-row space-x-8 justify-center items-center">
                    <div className="bg-cyan-900 w-60 sm:w-80 h-5/6 shadow-lg mt-10 mb-20 py-20 rounded-3xl ">
                        <Sidebar />
                    </div>
                   
                    <div className="flex flex-col mt-12 space-y-10  ">
                      <div className=" bg-cyan-900 h-56 w-40 rounded-lg flex-col flex  ">
                        <div className="mt-2 w-3/6 h-1/6 bg-cyan-500 rounded-md mx-2 inline-block">
                        <LiaBalanceScaleSolid />
                        <p className="font-semibold text-gray-200 mx-1">Balance</p>
                        </div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className=" bg-cyan-900 h-56 w-40 rounded-lg flex-col flex  " >
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                    <div className="flex flex-col mt-12 space-y-10  ">
                      <div className=" bg-cyan-900 h-56 w-40 rounded-lg flex-col flex  ">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className=" bg-cyan-900 h-56 w-40 rounded-lg flex-col flex  " >
                      <div></div>
                      <div></div>
                      </div>
                    </div>
                    <div className="flex flex-col mt-12 space-y-10  ">
                      <div className=" bg-cyan-900 h-56 w-40 rounded-lg flex-col flex  ">
                      <div></div>
                      <div></div>
                      <div></div>
                      </div>
                      <div className=" bg-cyan-900 h-56 w-40 rounded-lg flex-col flex  " >
                      <div></div>
                      <div></div>
                      <div></div>
                      </div>
                    </div>
                    </div>
                    
              
        </main>
    )
}
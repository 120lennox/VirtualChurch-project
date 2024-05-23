import { IoIosNotifications } from "react-icons/io";

export default function Notification(){
    return (
        <div aria-label="Main-container" className="">
            <div className="flex flex-row items-center">
                <h1 className="flex flex-row items-center space-x-1 font-bold text-xl text-yellow-400">
                    <IoIosNotifications /> Notifications
                </h1>
            </div> 
        </div>
    )
}
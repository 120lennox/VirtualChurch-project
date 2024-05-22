import React from "react";
import { FaCircleUser } from "react-icons/fa6";

const MemberReg = () => {
    return(
        <div className="flex fex-row items-start space-x-8">
            <div className="flex w-2/5 mt-10 mb-10 mx-5 h-60 flex-col items-center rounded-lg bg-gray-600 ">
                <div className="mt-20"><FaCircleUser className="flex custom-size" /> </div>
                <div className="mt-3 "></div>
            </div>
            <div className="flex w-3/5 mt-10 mb-10 "></div>
        </div>
    );
}

export default MemberReg;
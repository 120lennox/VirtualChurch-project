import * as React from "react"
import {Link} from "react-router-dom"

export default function Sidebar(){
    return(
        <div>
            <div aria-label="user" className="flex flex-col items-center">
                <p>pic here</p>
                <div aria-label="profile-text">
                    <h1 className="text-2xl font-semibold">
                        username
                    </h1>
                    <p className="text-sm text-cyan-200 text-center font-light">pledge No</p>
                </div>
            </div>

            <div aria-label="menu" className="flex flex-col font-semibold items-center mt-12 space-y-7 text-sm text-cyan-200 mb-10">
                <Link className="hover:text-yellow-400 ease-in-out duration-200" to="/registration">Registration</Link>
                <Link className="hover:text-yellow-400 ease-in-out duration-200"  to="/community">Community</Link>
                <Link className="hover:text-yellow-400 ease-in-out duration-200" to="/manage" >Manage Church</Link>
                <Link className="hover:text-yellow-400 ease-in-out duration-200" to="/tithing" >Tithing</Link>
                <Link className="hover:text-yellow-400 ease-in-out duration-200" to="/accounts" >Accounts</Link>
                <Link className="hover:text-yellow-400 ease-in-out duration-200" to="/settings" >Settings</Link>
            </div>
        </div>
    )
}
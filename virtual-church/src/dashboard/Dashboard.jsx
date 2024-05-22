import {Link} from "react-router-dom"
import Sidebar from "./Sidebar"
import Registration from "./dashboard-pages/Registration"
import Notification from "./dashboard-pages/Notification"
import Community from "./dashboard-pages/Community"

export default function Dashboard(){

    return(
        <div>
            <Community />
        </div>
    )
}
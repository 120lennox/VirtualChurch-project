import { createBrowserRouter } from "react-router-dom";
import Home from "./nav-elements/Home";
import About from "./nav-elements/About";
import Contact from "./nav-elements/Contact";
import Login from "./nav-elements/Login";
import Footer from "./nav-elements/Footer";
import Dashboard from "./dashboard/Dashboard";
import App from "./App";
import Homepage from "./nav-elements/Homepage";
import Sidebar from "./dashboard/Sidebar";
import Accounts from "./dashboard/dashboard-pages/Accounts";
import Community from "./dashboard/dashboard-pages/Community";
import Settings from "./dashboard/dashboard-pages/Settings";
import Registration from "./dashboard/dashboard-pages/Registration";
import Tithing from "./dashboard/dashboard-pages/Tithing";
import Manage from "./dashboard/dashboard-pages/Manage";
import CreateChurchProfile from "./pages/CreateProfile";


const router = createBrowserRouter([
    //nav elements routes
        {
            path: "/",
            element: <App />,
        },

        {
            path: "/homepage",
            element: <Homepage />
        },

        {
            path: "/home",
            element: <Home/>
        },

        {
            path: "/about",
            element: <About />,
        },

        {
            path: "/contact",
            element: <Contact/>
        },

        {
            path: "/login",
            element: <Login/>
        },
        
        {
            path: "/footer",
            element: <Footer />
        },

        //dashboards routes 

        {
            path: "/dashboard",
            element: <Dashboard/>
        },

        {
            path: "/sidebar",
            element: <Sidebar />
        },

        //dashboard sidebar routing

        {
            path: "/accounts",
            element: <Accounts />
        },

        {
            path: "/community",
            element: <Community />
        },

        {
            path: "/settings",
            element: <Settings />
        },

        {
            path: "/registration",
            element: <Registration />
        },

        {
            path: "/tithing",
            element: <Tithing />
        }, 

        {
            path: "/manage",
            element: <Manage />
        },

        //other pages 
        {
            path: "/create-profile",
            element: <CreateChurchProfile />
        }
    ])

export default router;
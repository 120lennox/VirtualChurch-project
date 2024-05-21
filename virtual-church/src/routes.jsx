import { createBrowserRouter } from "react-router-dom";
import Home from "./nav-elements/Home";
import About from "./nav-elements/About";
import Contact from "./nav-elements/Contact";
import Login from "./nav-elements/Login";
import Footer from "./nav-elements/Footer";
import Dashboard from "./dashboard/Dashboard";


const router = createBrowserRouter([
    //nav elements routes
    {
        path: "/",
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
])

export default router;
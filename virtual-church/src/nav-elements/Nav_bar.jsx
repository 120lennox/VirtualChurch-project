import {Routes, Route, Link} from "react-router-dom"
import Login from "./Login"
import About from "./About"
import Signup from "./Signup"
export default function Nav_Bar(){
    return(
        <div>
            <header className="w-full shadow-sm bg-slate-50" >
                <section className="max-w-2xl flex flex-row justify-between items-center">
                    <Link>virtualchurch</Link>
                    <nav className="text-3xl">
                        <ul className="flex flex-row ">
                            <li>
                                <Link to="/about">About us</Link>
                            </li>
                            <li>
                                <Link to="signup">signup</Link>
                            </li>
                            <li>
                                <Link to="/login">login</Link>
                            </li>
                        </ul>
                    </nav>
                </section>
            </header>
            <Routes>
                <Route path="/about" element={<About/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </div>
    )
}
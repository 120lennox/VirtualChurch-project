import {Link} from "react-router-dom"
export default function Nav_Bar(){
    return(
        <div>
            <header className="sticky top-0 z-10 bg-slate-50 dark:bg-cyan-950 text-cyan-950 dark:text-cyan-50" >
                <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
                    <h1 className="text-3xl font-bold font-Pacifico" >
                        <Link to="/">⛪virtual church</Link>
                    </h1>
                    <button className="text-3xl sm:hidden focus:outline-none text-cyan-50">&#9776;</button>
                    <nav className="hidden sm:block space-x-8 text-xl" >
                        <Link className="font-semibold font-poppins hover:text-yellow-400 duration-200 ease-in-out" to="/about">About us</Link>
                        <Link className="font-semibold font-poppins hover:text-yellow-400 duration-200 ease-in-out" to="/signup">Contact</Link>
                        <Link className="font-semibold font-poppins hover:text-yellow-400 duration-200 ease-in-out"  to="/login">
                            <button className="bg-cyan-50 py-2 px-4 rounded-md text-cyan-950 hover:bg-yellow-400 hover:text-cyan-50 duration-200 ease-in-out" >Login</button>
                        </Link>   
                    </nav>
                </section>
            </header>
        </div>
    )
}
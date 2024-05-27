import Contact from "./Contact";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div>
            <section className="flex flex-col-reverse justify-center sm:justify-between sm:flex-row p-4 items-center gap-12 mb-12 sm:mt-12">
                <article class="sm:w-1/2">
                    <h1 className="text-4xl text-center sm:text-6xl sm:text-left">
                        <span className="text-yellow-300">
                        Connect, Worship and Grow, Anywhere Anytime!
                        </span> 
                    </h1>
                    <p className="mt-2 text-center sm:text-left text-2xl text-cyan-100" >
                        Faith Beyond Walls: Your Sanctuary Online
                    </p>
                    <div className="flex justify-center sm:justify-start">
                        <button className="mt-4 bg-yellow-400 p-4 py-2 rounded-md text-cyan-50 font-semibold hover:bg-cyan-50 hover:text-cyan-950 duration-200 ease-in-out"><Link to="/signup" >Get started</Link></button>
                    </div>
                </article>             
            </section>
            <hr className="mx-auto bg-cyan-50" />
            <section aria-label="featured_sermons" className="p-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-center font-poppins" >Featured Sermons</h2>
                <div className="flex justify-between items-center sm:items-start flex-col sm:flex-row duration-75" >
                    <div className="min-w-sm mt-8 bg-cyan-900 rounded-md shadow-md p-4 hover:scale-110 duration-300 ease-in-out">
                        <h2>picture here</h2>
                        <p>test paragraph</p>
                        <div className="mt-5">
                            <button className="bg-yellow-400 py-2 px-2 rounded-md hover:bg-cyan-400 hover:text-cyan-950 m-1">Learn more</button>
                            <button className="bg-cyan-50 text-cyan-950 py-2 px-2 rounded-md hover:bg-cyan-400 hover:text-cyan-50">Join</button>
                        </div>  
                    </div>

                    <div className="min-w-sm mt-8 bg-cyan-900 rounded-md shadow-md p-4 hover:scale-110 duration-300 ease-in-out">
                        <h2>picture here</h2>
                        <p>test paragraph</p>
                        <div className="mt-5">
                            <button className="bg-yellow-400 py-2 px-2 rounded-md hover:bg-cyan-400 hover:text-cyan-950 m-1">Learn more</button>
                            <button className="bg-cyan-50 text-cyan-950 py-2 px-2 rounded-md hover:bg-cyan-400 hover:text-cyan-50">Join</button>
                        </div>  
                    </div>

                    <div className="min-w-sm mt-8 bg-cyan-900 rounded-md shadow-md p-4 hover:scale-110 duration-300 ease-in-out">
                        <h2>picture here</h2>
                        <p>test paragraph</p>
                        <div className="mt-5">
                            <button className="bg-yellow-400 py-2 px-2 rounded-md hover:bg-cyan-400 hover:text-cyan-950 m-1">Learn more</button>
                            <button className="bg-cyan-50 text-cyan-950 py-2 px-2 rounded-md hover:bg-cyan-400 hover:text-cyan-50">Join</button>
                        </div>  
                    </div>

                    <div className="min-w-sm mt-8 bg-cyan-900 rounded-md shadow-md p-4 hover:scale-110 duration-300 ease-in-out">
                        <h2>picture here</h2>
                        <p>test paragraph</p>
                        <div className="mt-5">
                            <button className="bg-yellow-400 py-2 px-2 rounded-md hover:bg-cyan-400 hover:text-cyan-950 m-1">Learn more</button>
                            <button className="bg-cyan-50 text-cyan-950 py-2 px-2 rounded-md hover:bg-cyan-400 hover:text-cyan-50">Join</button>
                        </div>  
                    </div>

                    
                </div>
            </section>
            <section aria-label="contact-us" className="">
                <Contact />
            </section>
            <section aria-label="footer">
                <Footer/>
            </section>
        </div>
    )
}
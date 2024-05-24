import * as React from "react"
import NavBar from "./Nav_bar"
import Home from "./Home"

/**
 * @author Lennox Mountain
 * @returns Navbar and the entire homepage 
 */
export default function Homepage(){
    return (
    <main className="min-h-screen bg-cyan-50 dark:bg-cyan-950 text-slate-900 dark:text-cyan-50 font-poppins scroll-smoth scrollbar scrollbar-track-yellow-300" >
      <section className="max-w-4xl mx-auto">
        <NavBar />
        <Home />
      </section>   
    </main>
    )
}
export default function Home(){
    return (
        <div>
            <section className="flex flex-col-reverse justify-center sm:justify-between sm:flex-row p-4 items-center gap-12 mb-12 sm:mt-12">
                <article class="sm:w-1/2">
                    <h1 className="text-4xl text-center sm:text-6xl sm:text-left">
                        <span className="text-yellow-300">
                        Connect, Worship and Grow, Anywhere Anyime!
                        </span> 
                    </h1>
                    <p className="text-center sm:text-left text-2xl " >
                        Faith Beyond Walls: Your Sanctuary Online
                    </p>
                    <div className="flex justify-center sm:justify-start">
                        <button className="mt-4 bg-yellow-400 p-4 py-2 rounded-md text-cyan-50 font-semibold hover:bg-cyan-50 hover:text-cyan-950 duration-75 ease-in-out">Get started</button>
                    </div>
                </article>             
            </section>
        </div>
    )
}
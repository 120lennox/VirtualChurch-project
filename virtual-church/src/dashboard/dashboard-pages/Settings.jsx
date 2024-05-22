import Sidebar from "../Sidebar"
import Notification from "./Notification"

export default function Settings(){
    return (
        <main aria-label="main-container" className="flex text-cyan-950 dark:text-cyan-50 font-poppins" >
            <section aria-label="submain-container" className="min-h-screen w-full bg-cyan-100 dark:bg-cyan-950">
                <div aria-label="width-definition" className="max-w-7xl mx-auto mt-10 flex flex-row justify-between">
                    <div className="bg-cyan-900 p-14 shadow-lg rounded-3xl">
                        <Sidebar />
                    </div>
                    <div aria-label="Settings" className="bg-cyan-950 p-12 rounded-md">

                    </div>
                    <div  className="bg-cyan-900 p-12 rounded-xl">
                            <Notification />
                    </div>
                </div>
            </section>
        </main>
    )
}
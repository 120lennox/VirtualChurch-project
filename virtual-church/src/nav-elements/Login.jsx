import { FcGoogle } from "react-icons/fc"
export default function Login(){
    return (
        <div className="flex justify-center items-center">
            <div className="bg-cyan-900 rounded-md p-8 mt-20 mb-10">
                <div className="flex flex-col justify-center items-center">
                    <div className="mb-5">
                        <h1 className="font-bold text-3xl sm:text-4xl">Signin</h1>
                    </div>
                    <div className="space-x-4 mt-8">
                        <label htmlFor="username">Username:</label>
                        <input className="py-1 px-7 sm:px-12 rounded-md focus:ring-cyan-600 focus:ring-transparent" type="text" id="username" placeholder="e.g John Doe" />
                    </div>

                    <div className="space-x-4 mt-8">
                        <label htmlFor="password">Password:</label>
                        <input className="py-1 px-7 sm:px-12 rounded-md focus:ring-cyan-600 focus:ring-transparent" type="text" id="password" />
                    </div>
                    <div className="mt-8 flex flex-row space-x-1 text-cyan-100">
                        <input className="rounded-md" type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">remember me </label>
                    </div>
                    <div className="mt-8 bg-yellow-400 rounded-md py-1 px-8 cursor-pointer hover:bg-yellow-700 hover:text-white duration-150 ease-in-out">
                        <input className="cursor-pointer" type="submit" value="Signin" />
                    </div>
                    
                    <div className="mt-8 ">
                        <p>or</p>
                    </div>
                    <div className="mt-8 mb-12">
                        <button className="flex flex-row items-center space-x-1 bg-cyan-600 py-2 px-4 rounded-md hover:scale-110 duration-200 ease-in-out">
                            <FcGoogle />
                            <p>Continue with google</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
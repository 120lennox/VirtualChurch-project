import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex justify-center items-center bg-cyan-950 h-screen">
      <div className="bg-cyan-900 rounded-lg text-cyan-50 flex flex-col justify-center items-center p-12">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-5">
            <h1 className="font-bold text-3xl sm:text-4xl text-gray-300">
              Signin
            </h1>
          </div>

          <div className="space-y-8 mt-8">
            <div className="flex space-x-2 sm:space-x-4 items-center">
              <label
                className="text-gray-300 font-semibold"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="py-1 px-1 w-36 sm:w-60 rounded-md outline-none focus:ring-2 focus:ring-yellow-400 bg-slate-200"
                type="text"
                id="username"
                placeholder="e.g Lenoil Amulus"
              />
            </div>

            <div className="flex space-x-2 sm:space-x-5 items-center">
              <label className="text-gray-300 font-semibold" htmlFor="password">
                Password
              </label>
              <input
                className="py-1 px-1 w-36 sm:w-60 rounded-md outline-none focus:ring-2 focus:ring-yellow-400 bg-slate-200"
                type="password"
                id="password"
              />
            </div>

            <div className="flex flex-row space-x-1 text-cyan-100 items-center">
              <div className="flex flex-row space-x-1 items-center">
                <input
                  className="rounded-md"
                  type="checkbox"
                  id="remember-me"
                />
                <label htmlFor="remember-me">remember me </label>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <Link to="/create-profile">
            <button
              className="flex flex-row items-center bg-cyan-600 rounded-md py-2 px-10 mb-5 hover:scale-90 duration-200 ease-in-out"
              type="submit"
            >
              Signin
            </button>
            </Link>

            <p className="text-gray-300 font-semibold mt-5 mb-5">or</p>

            <button
              className="flex flex-row items-center border-yellow-400 border-2 bg-transparent outline-4 rounded-md py-2 px-10 hover:scale-90 duration-200 ease-in-out"
            >
              <p className="text-gray-400 font-semibold mr-2">Continue with</p>
              <FcGoogle className="inline-block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
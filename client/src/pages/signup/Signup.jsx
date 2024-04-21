import React from 'react'

    const Signup = () => {
    return (
        <div> 
    <div className="flex flex-col items-center justify-center h-screen dark">
    <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4 text-center">Signup</h2>
        <form className="flex flex-col">
        <input placeholder="Full Name" id= "fName" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" required type="text"/>
        <input placeholder="Email address" id= "Mail" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" required type="email"/>
        <input placeholder="Phone Number" id= "pNumber" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" requiredtype="text"/>
        <input placeholder="Password" id= "pWord" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" required type="password"/>
        <input placeholder="Confirm Password" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" required type="password"/>
        <div className="flex items-center justify-between flex-wrap"></div>
        <div className="flex items-center justify-between flex-wrap">
            <label className="text-sm text-gray-200 cursor-pointer" for="remember-me">
            <input className="mr-2" id="remember-me" type="checkbox"/>
            Remember me
            </label>
            <a className="text-sm text-blue-500 hover:underline mb-0.5" href="#">Forgot password?</a>
            <p className="text-white mt-4"> Already have an account? <a class="text-sm text-blue-500 -200 hover:underline mt-4" href="Login">Login</a></p>
        </div>
        <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Sign up</button>
        </form>
    </div>
    </div>
        </div>
        
    )
    }

export default Signup
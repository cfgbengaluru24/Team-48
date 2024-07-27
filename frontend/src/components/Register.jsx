import React from 'react';
//import NavBar from './NavBar';

function Register() {
  return (
    <div>
      {/* <NavBar /> */}
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Register</h1>
        <p className="mb-8 text-lg">Please enter your registration details.</p>
        <form className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
              User Email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

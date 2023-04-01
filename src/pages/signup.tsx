import React from "react";

function Signup() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-center text-3xl font-semibold text-white">
        Create account to start using Devio
      </h1>
      <form className="space-y-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-gray-500 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-white">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border border-gray-500 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="confirmPassword" className="text-white">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="border border-gray-500 rounded-md p-2"
          />
        </div>
      </form>
      <p>Don’t have an account ? <span className="text-blue-400 text-center">Sign up</span></p>
    </div>
  );
}

export default Signup;

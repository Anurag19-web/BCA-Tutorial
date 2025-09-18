import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-4">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold text-gray-800 text-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Login
        </motion.h1>

        {/* Form */}
        <form className="flex flex-col gap-5" onSubmit={handleFormSubmit}>
          <motion.input
            type="email"
            name="email"
            value={loginForm.email}
            onChange={handleLogin}
            placeholder="Email"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleLogin}
            placeholder="Password"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            whileFocus={{ scale: 1.02 }}
          />

          <motion.button
            type="submit"
            className="bg-purple-600 text-white font-semibold rounded-xl py-3 shadow-md hover:bg-purple-700 hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center">
          <NavLink to="/" className="inline-block mb-3 text-purple-600 font-medium hover:underline">
            Home
          </NavLink>
          <p className="text-gray-500">
            Don't have an account?{" "}
            <NavLink to="/signup" className="text-purple-600 font-semibold hover:underline">
              Sign Up
            </NavLink>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

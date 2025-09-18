import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export const Header = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "Categories", to: "/categories" },
    { name: "Account", to: "/signup" },
  ];

  const MotionNavLink = motion(NavLink);

  return (
    <header className={`fixed w-full z-50 shadow-md ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Future Wise
        </motion.h1>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8 items-center">
          {links.map((link, idx) => (
            <MotionNavLink
              key={idx}
              to={link.to}
              className={({ isActive }) =>
                `font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                  isActive ? "text-blue-600 dark:text-blue-400" : ""
                }`
              }
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </MotionNavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} md:hidden shadow-lg`}
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            {links.map((link, idx) => (
              <MotionNavLink
                key={idx}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-medium text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                    isActive ? "text-blue-600 dark:text-blue-400" : ""
                  }`
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </MotionNavLink>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  );
};

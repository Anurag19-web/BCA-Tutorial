import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-white py-4 text-center shadow-inner">
      <div className="flex justify-center flex-wrap gap-6">
        <NavLink
          to="/about"
          className="hover:text-yellow-400 transition-colors font-medium"
        >
          About Us
        </NavLink>
        <NavLink
          to="/help"
          className="hover:text-yellow-400 transition-colors font-medium"
        >
          Help
        </NavLink>
        <NavLink
          to="/contact"
          className="hover:text-yellow-400 transition-colors font-medium"
        >
          Contact
        </NavLink>
      </div>
      <p className="mt-2 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Future Wise. All rights reserved.
      </p>
    </div>
  );
};

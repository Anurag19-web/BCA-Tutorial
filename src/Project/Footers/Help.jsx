import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Help = ({theme}) => {
  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} py-20 px-6 md:px-16 lg:px-32 relative`}>
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Help</h1>
        <h3 className="text-xl md:text-2xl font-semibold">
          Need Assistance or Have a Suggestion?
        </h3>
      </motion.div>

      {/* Description */}
      <motion.p
        className="text-lg md:text-xl mb-6 text-center md:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        If you're experiencing any issues while using the platform or have suggestions that could help us improve, we’d love to hear from you! Your feedback helps us provide the best possible learning experience.
      </motion.p>

      {/* Common Issues */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-4">Common Issues:</h2>
        <ul className="list-disc list-inside space-y-2 text-lg md:text-xl">
          <li>Videos not loading properly?</li>
          <li>Facing difficulties with navigation?</li>
          <li>Problems with accessing content on mobile devices?</li>
        </ul>
      </motion.div>

      {/* Contact & Suggestions */}
      <motion.div
        className="mb-6 text-lg md:text-xl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <p className="mb-4">
          If you encounter any of these issues or other technical difficulties, please reach out to us through the{" "}
          <NavLink to="/contact" className="text-blue-600 font-semibold hover:underline">
            Contact Us
          </NavLink>{" "}
          page. We’ll get back to you as soon as possible.
        </p>
        <h4 className="text-xl md:text-2xl font-semibold text-blue-500 mb-2">Want to help us improve?</h4>
        <p className="mb-2">We’re always looking for ways to make the platform better. Send us your suggestions and ideas!</p>
        <p>Visit our page and let us know!</p>
      </motion.div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
    </div>
  );
};

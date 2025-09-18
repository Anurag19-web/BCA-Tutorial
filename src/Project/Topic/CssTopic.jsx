import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const CssTopic = () => {
  const navigate = useNavigate();

  const handleClick = (page) => {
    navigate("/videos", { state: { page } });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      {/* Back Button */}
      <motion.button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back
      </motion.button>
      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          CSS Videos
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mt-4">
          Click below to start learning CSS in one shot.
        </p>
      </motion.div>

      {/* Chapter Card */}
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="p-8 rounded-2xl shadow-2xl bg-gradient-to-r from-blue-400 to-blue-600 text-white mb-8 hover:scale-105 hover:shadow-3xl transition-transform duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">CSS ONE SHOT</h2>
          <p className="text-sm md:text-base mb-6">
            Learn the basics of CSS and enhance your web styling skills.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick(2)}
            className="inline-block px-6 py-3 font-semibold rounded-lg bg-white text-blue-600 hover:bg-gray-200 transition-all duration-300"
          >
            Start Learning
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

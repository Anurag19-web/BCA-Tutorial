import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const CTopic = ({theme}) => {
  const navigate = useNavigate();

  const handleClick = (page) => {
    navigate("/videos", { state: { page } });
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} py-20 px-6`}>
      {/* Back Button */}
      <motion.button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-indigo-800 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md"
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
        <h1 className="text-4xl md:text-5xl font-bold">
          C Language
        </h1>
        <p className="text-lg md:text-xl mt-4">
          Click below to start learning C language from basics to advanced.
        </p>
      </motion.div>

      {/* Chapter Card */}
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="p-8 rounded-2xl shadow-2xl bg-gradient-to-r bg-indigo-800 text-white mb-8 hover:scale-105 hover:shadow-3xl transition-transform duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Basic C Language
          </h2>
          <p className="text-sm md:text-base mb-6">
            Learn the basics and advanced concepts of C programming.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick(5)}
            className="inline-block px-6 py-3 font-semibold rounded-lg bg-white text-blue-600 hover:bg-gray-200 transition-all duration-300"
          >
            Start Learning
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

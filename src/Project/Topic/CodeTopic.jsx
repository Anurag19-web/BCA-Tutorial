import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const CodeTopic = ({theme}) => {
  const navigate = useNavigate();

  const handleClick = (page) => {
    navigate("/videos", { state: { page } });
  };

  const topics = [
    { title: "Logic Gates", desc: "Learn the Logic Gates.", page: 3.1, color: "bg-indigo-800" },
    { title: "Boolean Algebra", desc: "Learn the Boolean Algebra.", page: 3.2, color: "bg-indigo-800" },
    { title: "Number System", desc: "Learn the Number System.", page: 3.3, color: "bg-indigo-800" },
    { title: "Half & Full Adder", desc: "Learn the Half and Full Adder.", page: 3.4, color: "bg-indigo-800" },
  ];

  return (
    <div className={`min-h-screen  py-20 px-6 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      {/* Back Button */}
      <motion.button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-indigo-800 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back
      </motion.button>
      {/* Page Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">Select Your Topic</h1>
        <p className="text-lg md:text-xl mt-4">Choose a topic to start learning the coding concepts.</p>
      </motion.div>

      {/* Topics Cards */}
      <div className="max-w-3xl mx-auto space-y-8">
        {topics.map((topic, idx) => (
          <motion.div
            key={topic.title}
            className={`p-8 rounded-2xl shadow-2xl text-white bg-gradient-to-r ${topic.color} hover:scale-105 hover:shadow-3xl transition-transform duration-300`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{topic.title}</h2>
            <p className="text-sm md:text-base mb-6">{topic.desc}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleClick(topic.page)}
              className="inline-block px-6 py-3 font-semibold rounded-lg bg-white text-blue-600 hover:bg-gray-200 transition-all duration-300"
            >
              Start Learning
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

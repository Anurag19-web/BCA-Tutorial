import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const SemOneSubject = ({theme}) => {
      const navigate = useNavigate()
  const subjects = [
    { title: "HTML", desc: "Explore videos on HTML.", link: "/html/topic", color: "bg-indigo-800" },
    { title: "CSS", desc: "Explore videos on CSS.", link: "/css/topic", color: "bg-indigo-800" },
    { title: "CODE", desc: "Explore videos on CODE.", link: "/code/topic", color: "bg-indigo-800" },
  ];

  return (
    <div className={`min-h-screen py-20 px-6 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      {/* Back Button */}
      <motion.button
        onClick={() => navigate("/categories")}
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
        <h1 className="text-4xl md:text-5xl font-bold  mb-4">
          Select a Subject
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Choose from a variety of subjects to focus on for your exams.
        </p>
      </motion.div>

      {/* Subject Cards */}
      <div className="grid gap-10 md:grid-cols-3">
        {subjects.map((sub, idx) => (
          <motion.div
            key={idx}
            className={`p-8 rounded-2xl shadow-2xl bg-gradient-to-r ${sub.color} text-white flex flex-col justify-between hover:scale-105 hover:shadow-3xl transition-transform duration-300`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{sub.title}</h2>
            <p className="text-sm md:text-base mb-6">{sub.desc}</p>
            <NavLink to={sub.link}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 font-semibold rounded-lg bg-white text-gray-800 hover:bg-gray-200 transition-all duration-300"
              >
                Explore
              </motion.div>
            </NavLink>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

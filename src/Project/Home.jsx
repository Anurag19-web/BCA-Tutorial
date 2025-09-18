import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = ({ theme }) => {
  const courses = [
    { title: "BCA Introduction", desc: "Learn the fundamentals of BCA.", color: "bg-red-500" },
    { title: "Coding Basics", desc: "Understand the basics of coding.", color: "bg-green-500" },
    { title: "Unlock Your Tech Potential", desc: "Master programming skills with engaging tutorials and practical insights.", color: "bg-blue-500" },
  ];

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} pt-24 px-6 flex flex-col items-center space-y-16`}>
      
      {/* Hero Section */}
      <motion.div
        className="text-center space-y-6 max-w-3xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400">
          Empowering Students to Succeed
        </h1>
        <h3 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
          Access high-quality educational videos for BCA.
        </h3>
        <NavLink to="/categories">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold cursor-pointer hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors"
          >
            Click Here To Start Learning
          </motion.div>
        </NavLink>
      </motion.div>

      {/* Featured Courses */}
      <motion.div
        className="w-full max-w-6xl grid gap-8 md:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-xl shadow-lg text-white ${course.color} flex flex-col justify-between hover:scale-105 transition-transform duration-300`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
            <p className="text-sm md:text-base">{course.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

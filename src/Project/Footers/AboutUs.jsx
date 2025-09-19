import { motion } from "framer-motion";

export const AboutUs = ({theme}) => {
  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} py-20 px-6 md:px-16 lg:px-32`}>
      {/* About Section */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">About Us</h1>
        <p className="text-lg md:text-xl mb-4">
          Welcome to <span className="font-semibold text-blue-600">FutureWise</span>, where we aim to make learning accessible and engaging for students around the globe. Our platform provides high-quality educational videos, interactive content, and support students need to excel in their exams.
        </p>
        <p className="text-base md:text-lg">
          Whether you're studying for school exams, college entrance, or any other academic goal, our courses are tailored to help you succeed. We are committed to making education accessible, flexible, and effective for all students, no matter where they are.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4 text-center md:text-left">Our Mission</h1>
        <p className="text-lg md:text-xl text-center md:text-left">
          Our mission is to empower students with the knowledge and tools to succeed academically and beyond. We believe that education should be simple, accessible, and effective.
        </p>
      </motion.div>

      {/* Team Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4 text-center md:text-left">Our Team</h1>
        <p className="text-lg md:text-xl text-center md:text-left">
          Our team consists of experienced educators and developers passionate about creating the best educational experience for our users. Together, we strive to continually improve the platform and add new content based on student needs.
        </p>
      </motion.div>

      {/* Decorative Shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
    </div>
  );
};

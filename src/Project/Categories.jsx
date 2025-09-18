import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const Categories = () => {
    const navigate = useNavigate()
    const semesters = [
        {
            title: "Semester 1",
            desc: "Explore videos on HTML, CSS, CODE & more.",
            link: "/Sem1/subject",
            color: "from-red-400 to-red-600",
        },
        {
            title: "Semester 2",
            desc: "Explore videos on JavaScript, C Language & more.",
            link: "/Sem2/subject",
            color: "from-green-400 to-green-600",
        },
        {
            title: "Semester 3",
            desc: "Explore videos on C++, Java, Python & more.",
            link: "/Sem3/subject",
            color: "from-blue-400 to-blue-600",
        },
    ];

    return (
        <div className="min-h-screen py-20 px-6 bg-gray-50">
            {/* Back Button */}
            <motion.button
                onClick={() => navigate("/")}
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
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Select Your Semester
                </h1>
                <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                    Choose from a variety of semesters to focus on for your exams.
                </p>
            </motion.div>

            {/* Semester Cards */}
            <div className="grid gap-10 md:grid-cols-3">
                {semesters.map((sem, idx) => (
                    <motion.div
                        key={idx}
                        className={`p-8 rounded-2xl shadow-2xl bg-gradient-to-r ${sem.color} text-white flex flex-col justify-between hover:scale-105 hover:shadow-3xl transition-transform duration-300`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2, duration: 0.6 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">
                            {sem.title}
                        </h2>
                        <p className="text-sm md:text-base mb-6">{sem.desc}</p>
                        <NavLink to={sem.link}>
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

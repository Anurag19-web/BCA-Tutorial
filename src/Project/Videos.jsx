import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Project from "./Topic/Project.json";

export const Videos = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { page } = location.state;
  const [video, setVideo] = useState([]);

  useEffect(() => {
    setVideo(Project);
  }, []);

  const renderVideos = (videoData) => {
    return videoData.map(({ id, name, URL }) => (
      <motion.div
        key={id}
        className="VideosDiv rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-800 p-4 mb-8 flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
      >
        <iframe
          width="100%"
          height="300"
          src={URL}
          className="VideoFrame rounded-lg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <h2 className="VideoHead mt-4 text-xl font-semibold text-gray-800 dark:text-white text-center">
          {name}
        </h2>
      </motion.div>
    ));
  };

  const getTopicVideos = () => {
    if (page === "javascript" && video[7]?.javascript) {
      return renderVideos(video[7].javascript);
    }
    if (page === "python" && video[14]?.python) {
      return renderVideos(video[14].python);
    }
    // Default fallback: show all videos
    return video
      .filter((v) => v.id === page)
      .map(({ id, name, URL }) => (
        <motion.div
          key={id}
          className="VideosDiv rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-800 p-4 mb-8 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
        >
          <iframe
            width="100%"
            height="300"
            src={URL}
            className="VideoFrame rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <h2 className="VideoHead mt-4 text-xl font-semibold text-gray-800 dark:text-white text-center">
            {name}
          </h2>
        </motion.div>
      ));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-20">
      {/* Back Button */}
      <motion.button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back
      </motion.button>

      {/* Page Heading */}
      <motion.div
        className="Videos-head-div text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          Future-Proof Your Career With Technical Tutorials
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2 md:text-lg">
          Below are the videos for this Topic. Watch them in sequence to master the concepts.
        </p>
      </motion.div>

      {/* Video Grid */}
      <motion.div
        className="VideosMainDiv grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {getTopicVideos()}
      </motion.div>
    </div>
  );
};

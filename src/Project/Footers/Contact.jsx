import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const [emailLink, setEmailLink] = useState("");

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    setEmailLink(
      isMobile
        ? "mailto:anuragnayak78910@gmail.com"
        : "https://mail.google.com/mail/?view=cm&fs=1&to=anuragnayak78910@gmail.com"
    );
  }, []);

  return (
    <section className="relative bg-gray-100 pt-24 pb-32">
      <div className="container mx-auto px-6 text-center">
        <motion.h3
          className="text-4xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h3>

        <motion.p
          className="text-gray-600 mb-12 text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Feel free to reach out for collaboration, internship opportunities, or just a friendly chat!
        </motion.p>

        <motion.div
          className="bg-white shadow-lg rounded-2xl p-8 max-w-lg mx-auto mb-12 text-left space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-black"><strong>📞 Phone:</strong> +91 85114 10560</p>
          <p className="text-lg text-black">
            <strong>📧 Email:</strong>{" "}
            <a
              href={emailLink}
              target={emailLink.startsWith("http") ? "_blank" : undefined}
              rel={emailLink.startsWith("http") ? "noreferrer" : undefined}
              className="text-blue-600 hover:underline break-words"
            >
              anuragnayak78910@gmail.com
            </a>
          </p>
          <p className="text-lg text-black"><strong>📍 Location:</strong> Ahmedabad, Gujarat, India</p>
          <p className="text-lg text-black">
            <strong>💻 GitHub:</strong>{" "}
            <a
              href="https://github.com/Anurag19-web"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline break-words"
            >
              github.com/Anurag19-web
            </a>
          </p>
          <p className="text-lg text-black">
            <strong>🔗 LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/anurag-nayak-4a7b72358/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline break-words"
            >
              linkedin.com/in/anurag-nayak
            </a>
          </p>
        </motion.div>

        {/* Social Icons now in normal flow */}
        <motion.div
          className="flex justify-center space-x-8 text-3xl sm:text-2xl mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a
            href={emailLink}
            target={emailLink.startsWith("http") ? "_blank" : undefined}
            rel={emailLink.startsWith("http") ? "noreferrer" : undefined}
            className="hover:text-blue-600 transition-colors duration-300 text-black"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Anurag19-web"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition-colors duration-300 text-black"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/anurag-nayak-4a7b72358/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition-colors duration-300 text-black"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { useState } from "react";
import { FaCss3Alt, FaFigma, FaGitAlt, FaHtml5, FaReact } from "react-icons/fa";
import { LuArrowDownToLine } from "react-icons/lu";
import { SiBootstrap, SiJavascript, SiTailwindcss } from "react-icons/si";
import profileImage from "../assets/images/profile-image.png";

function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  const skills = [
    { icon: <FaHtml5 />, color: "#E34F26" },
    { icon: <FaCss3Alt />, color: "#1572B6" },
    { icon: <SiJavascript />, color: "#F7DF1E" },
    { icon: <FaReact />, color: "#61DAFB" },
    { icon: <SiTailwindcss />, color: "#06B6D4" },
    { icon: <SiBootstrap />, color: "#563D7C" },
    { icon: <FaFigma />, color: "#F24E1E" },
    { icon: <FaGitAlt />, color: "#F05032" },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="profile-placeholder">
          <img src={profileImage} alt="Profile" />
        </div>

        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <code>Hi, I'm Faizullah Hussain</code>
          </motion.p>

          <motion.p
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Frontend Developer
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            I build modern web experiences using React, JavaScript, and
            WordPress — transforming design concepts into clean, responsive, and
            high-performing websites.
          </motion.p>

          <div className="marquee-wrapper">
            <motion.div
              className="marquee-track"
              animate={isHovered ? {} : { x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 15, // Adjust speed here
                repeat: Infinity,
                repeatType: "loop",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Set 1: Original Set */}
              {skills.map((skill, index) => (
                <div key={`hero-marquee-1-${index}`} className="skill-card">
                  <span className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </span>
                </div>
              ))}
              {/* Set 2: Exact Duplicate for Seamless Looping */}
              {skills.map((skill, index) => (
                <div key={`hero-marquee-2-${index}`} className="skill-card">
                  <span className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="#" className="download-cv-btn">
              <LuArrowDownToLine strokeWidth={3} size={20} /> Download my CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

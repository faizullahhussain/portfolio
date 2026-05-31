import { motion } from "framer-motion";
import { useState } from "react";
import { FaCss3Alt, FaFigma, FaGitAlt, FaHtml5, FaReact } from "react-icons/fa";
import { SiBootstrap, SiJavascript, SiTailwindcss } from "react-icons/si";
import { useInView } from "react-intersection-observer";

function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [isHoveredTop, setIsHoveredTop] = useState(false);
  const [isHoveredBottom, setIsHoveredBottom] = useState(false);

  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "#563D7C" },
    { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  ];

  const half = Math.ceil(skills.length / 2);
  const topRowSkills = skills.slice(0, half);
  const bottomRowSkills = skills.slice(half);

  return (
    <section className="skills" id="skills" ref={ref}>
      <div>
        <motion.div
          className="skills-split-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="skills-info-col">
            <h2 className="section-title">My Skills</h2>

            <ul className="skills-text-list">
              <li>
                <strong>Core Engineering:</strong>JavaScript (ES6+), React.js,
                HTML5, CSS3
              </li>
              <li>
                <strong>Styling Frameworks:</strong>Tailwind CSS, Bootstrap,Sass
                (SCSS),Responsive Design
              </li>
              <li>
                <strong>Site Optimization:</strong>Core Web Vitals, Semantic
                HTML, Schema Markup, Speed Optimization
              </li>
              <li>
                <strong>Deployment & Hosting:</strong>DNS Management, Domain
                Mapping, Vercel / Netlify, cPanel Hosting
              </li>
              <li>
                <strong>Workflow & Tools:</strong>Git, GitHub, RESTful APIs,
                Figma & Adobe XD to Code
              </li>
            </ul>
          </div>

          {/* COLUMN 2: Two Staggered Animated Logo Rows */}
          <div className="marquee-container-stacked">
            {/* Row 1: Moves Left */}
            <div className="marquee-wrapper">
              <motion.div
                className="marquee-track"
                animate={isHoveredTop ? {} : { x: ["0%", "-50%"] }}
                transition={{
                  ease: "linear",
                  duration: 25,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                onMouseEnter={() => setIsHoveredTop(true)}
                onMouseLeave={() => setIsHoveredTop(false)}
              >
                {topRowSkills.map((skill, index) => (
                  <div key={`top-1-${index}`} className="skill-card">
                    <span className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    {/* <span className="skill-name">{skill.name}</span> */}
                  </div>
                ))}
                {topRowSkills.map((skill, index) => (
                  <div key={`top-2-${index}`} className="skill-card">
                    <span className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    {/* <span className="skill-name">{skill.name}</span> */}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 2: Moves Right */}
            <div className="marquee-wrapper">
              <motion.div
                className="marquee-track"
                animate={isHoveredBottom ? {} : { x: ["-50%", "0%"] }}
                transition={{
                  ease: "linear",
                  duration: 25,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                onMouseEnter={() => setIsHoveredBottom(true)}
                onMouseLeave={() => setIsHoveredBottom(false)}
              >
                {bottomRowSkills.map((skill, index) => (
                  <div key={`bot-1-${index}`} className="skill-card">
                    <span className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    {/* <span className="skill-name">{skill.name}</span> */}
                  </div>
                ))}
                {bottomRowSkills.map((skill, index) => (
                  <div key={`bot-2-${index}`} className="skill-card">
                    <span className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    {/* <span className="skill-name">{skill.name}</span> */}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;

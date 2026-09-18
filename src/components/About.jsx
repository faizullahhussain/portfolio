import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import StatCounter from "./StateCounter";

function About() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>

          <div className="about-content">
            <div className="about-text">
              <p>
                I am a passionate WordPress Developer and Frontend Developer
                focused on building modern, responsive, and high-performance
                websites. I specialize in creating professional WordPress
                websites using Elementor, custom CSS, and modern web development
                practices, while also developing custom interfaces with
                JavaScript and React.
              </p>
              <p>
                I enjoy turning design ideas and complex requirements into
                clean, intuitive, and user-friendly experiences. My focus is on
                building websites that look great, perform well, and work
                smoothly across all devices.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <h3>
                  <StatCounter targetNumber={50} />
                </h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>
                  <StatCounter targetNumber={3} />+
                </h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>
                  <StatCounter targetNumber={30} />+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

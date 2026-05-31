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
                I am a passionate <strong>Frontend Engineer</strong> dedicated
                to building modern, high-performance web applications. I love
                turning complex interface challenges into simple, beautiful, and
                intuitive user experiences.
              </p>
              <p>
                With a strong foundation in modern <strong>JavaScript </strong>
                and <strong>React</strong>, I specialize in crafting clean,
                responsive layouts and smooth interactive elements from scratch.
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
                  <StatCounter targetNumber={4} />+
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

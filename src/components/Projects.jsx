import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import egreen from "../assets/images/egreen.png";
import dashboardImage from "../assets/images/expense-tracker.png";
import harleymind from "../assets/images/harleymindcare.png";
import moviesearch from "../assets/images/moviesearchtmbd.png";
import voipcalling from "../assets/images/voipcalling.png";
import voipbusiness from "../assets/images/voipbusiness.png";
import houma from "../assets/images/houma.png";
import a2pcalling from "../assets/images/a2pcalling.png";
import remotePro from "../assets/images/remotepro.png";

function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Financial Analytics Dashboard",
      description:
        "A personal finance dashboard with dynamic charts, expense tracking, and categorization.",
      tech: ["React", "SCSS", "LocalStorage"],
      type: "custom",
      github: "https://github.com/faizullahhussain/expense-tracker",
      live: "https://faizullahhussain.github.io/expense-tracker/",
      image: dashboardImage,
    },
    {
      title: "Enterprise Telecom Website",
      description:
        "A corporate WordPress site for cloud communications, optimized for conversion, speed, and performance.",
      tech: ["wordpress", "Elementor", "Yoast SEO"],
      type: "wordpress",
      live: "https://www.voipbusiness.com/",
      image: voipbusiness,
    },
    {
      title: "Movie Discovery Application",
      description:
        "An interactive movie search platform featuring live API data filtering and responsive media grids.",
      tech: ["React", "TMDB", "Localstorage"],
      type: "custom",
      github: "https://github.com/faizullahhussain/react-tmdb-movie-app",
      live: "https://faizullahhussain.github.io/react-tmdb-movie-app/",
      image: moviesearch,
    },
    {
      title: "Sustainable Energy Portal",
      description:
        "An optimized corporate WordPress site designed with a streamlined interactive eligibility check engine.",
      tech: ["WordPress", "Astra", "Elementor"],
      type: "wordpress",
      live: "https://e-green.co.uk/",
      image: egreen,
    },
    {
      title: "Clinical Patient Portal Site",
      description:
        "A responsive psychiatric healthcare platform built with integrated booking systems and client support.",
      tech: ["WordPress", "GTranslate", "Elementor"],
      type: "wordpress",
      live: "https://www.harleymindcare.com/",
      image: harleymind,
    },
    {
      title: "VoIP Platform",
      description:
        "A responsive VoIP website showcasing business phone systems and communication solutions",
      tech: ["WordPress", "All in One SEO", "Elementor"],
      type: "wordpress",
      live: "https://voipcalling.com/",
      image: voipcalling,
    },
    {
      title: "City Guide & Listings",
      description:
        "A city guide and listing platform for discovering local businesses, services, restaurants, hotels, and attractions.",
      tech: ["WordPress", "All in One SEO", "Elementor"],
      type: "wordpress",
      live: "https://houma.io/",
      image: houma,
    },
    {
      title: "A2P Calling",
      description:
        "A modern VoIP platform for managing business calls, numbers, call routing, CRM integration, and recording.",
      tech: ["WordPress", "All in One SEO", "Elementor"],
      type: "wordpress",
      live: "https://a2pcalling.com/",
      image: a2pcalling,
    },
    {
      title: "Freelance Talent Platform",
      description:
        "A global platform connecting businesses with skilled freelancers across development and services.",
      tech: ["WordPress", "All in One SEO", "Elementor"],
      type: "wordpress",
      live: "https://remote.pro/",
      image: remotePro,
    },
  ];

  const cardsPerSlide = 3;

  const slides = [];
  for (let i = 0; i < projects.length; i += cardsPerSlide) {
    slides.push(projects.slice(i, i + cardsPerSlide));
  }

  const totalSlides = slides.length;

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>

          <div className="slider-container">
            <div className="slider-wrapper">
              <div
                className="slider-track"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                {slides.map((slide, slideIndex) => (
                  <div className="slide-page" key={slideIndex}>
                    {slide.map((project, index) => (
                      <motion.div
                        key={project.title}
                        className="project-card-slider"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className={`project-type-badge ${project.type}`}>
                          {project.type === "custom"
                            ? "Custom Code"
                            : "WordPress"}
                        </div>

                        <div className="project-image">
                          <img src={project.image} alt={project.title} />
                        </div>

                        <div className="project-info">
                          <h3>{project.title}</h3>

                          <p>{project.description}</p>

                          <div>
                            {project.tech.map((badge, index) => (
                              <button key={badge || index} className="badge">
                                {badge}
                              </button>
                            ))}
                          </div>

                          <div className="project-links">
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-link"
                            >
                              🚀 Live Demo
                            </a>

                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                              >
                                <FaGithub
                                  size={16}
                                  style={{ marginRight: "0.5rem" }}
                                />
                                Github
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="slider-dots">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <motion.button
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;

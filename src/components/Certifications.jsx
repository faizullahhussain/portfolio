import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import jsCertificate from "../assets/images/js-certificate.jpg";
import reactCertificate from "../assets/images/react-certificate.jpg";

const Certifications = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <section className="certifications" id="certifications" ref={ref}>
      <div className="container">
        <h2 className="section-title">Certifications</h2>

        <motion.dev
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="certificate-wrapper"
        >
          <div className="certificate">
            <img src={jsCertificate} alt="" />
            <div className="certificate-details">
              <h3>The Complete JavaScript Course 2025: From Zero to Expert!</h3>
              <p>Date: March 15, 2026</p>
              <a
                href="https://www.udemy.com/certificate/UC-542a0ac7-deb2-4f0c-8fd9-75db453dd79b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View The Complete JavaScript Courrse certificate"
              >
                <span>View Certificate</span>
                <BsArrowRight />
              </a>
            </div>
          </div>

          <div className="certificate">
            <img src={reactCertificate} alt="" />
            <div className="certificate-details">
              <h3>React - The Complete Guide (incl. Next.js, Redux)</h3>
              <p>Date: June 24, 2026</p>
              <a
                href="https://www.udemy.com/certificate/UC-5621054d-5f37-4d41-b738-8b2203e2efb2/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Complete Guide (incl. Next.js, Redux"
              >
                <span> View Certificate</span>
                <BsArrowRight />
              </a>
            </div>
          </div>
        </motion.dev>
      </div>
    </section>
  );
};

export default Certifications;

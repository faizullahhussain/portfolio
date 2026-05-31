import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )

      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("FAILED TO SEND EMAIL:", error);
        alert("Failed to send message.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together</p>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>faizhussain273@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+92 311 9207899</p>
                </div>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"}
                {!isSending && <FaArrowRight className="arrow-icon" />}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;

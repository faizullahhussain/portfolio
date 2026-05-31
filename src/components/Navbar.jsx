import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  // close Menu
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <div className="nav-logo">
          <code>
            <span className="tag">&lt;</span>
            faizullah
            <span className="tag left-padd"> /&gt;</span>
          </code>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                offset={-110}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="https://github.com/faizullahhussain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/faizullah-hussain/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={17} />
            </a>
            <a
              href="https://www.facebook.com/faizullah.hussain.1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={17} />
            </a>
          </motion.div>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.ul
            className="mobile-menu"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;

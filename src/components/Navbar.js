import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

const Navbar = () => {
  const ampersand = React.createElement("span", {
    dangerouslySetInnerHTML: { __html: "&amp;&amp;" },
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "Spring",
        stiffness: 25,
        duration: 0.75,
      }}
    >
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__list-items">
            <Link className="navbar__links" to="/about">
              About_Me
            </Link>
          </li>
          <li className="navbar__list-items">
            <Link className="navbar__links" to="/skills-services">
              Skills {ampersand} Services
            </Link>
          </li>
          <li className="navbar__list-items">
            <Link className="navbar__links" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="navbar__list-items">
            <Link className="navbar__links" to="/contact">
              Contact_Me
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;

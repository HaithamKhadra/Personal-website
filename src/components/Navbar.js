import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { useLocation } from "@reach/router";

const Navbar = () => {
  const ampersand = React.createElement("span", {
    dangerouslySetInnerHTML: { __html: "&amp;&amp;" },
  });

  const location = useLocation();
  const url = location.href || "/";

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
            <Link
              className={`navbar__links ${
                url.includes("/about") ? "navbar__links--active" : ""
              }`}
              to="/about"
            >
              About_Me
            </Link>
          </li>
          <li className="navbar__list-items">
            <Link
              className={`navbar__links ${
                url.includes("/skills-services") ? "navbar__links--active" : ""
              }`}
              to="/skills-services"
            >
              Skills {ampersand} Services
            </Link>
          </li>
          <li className="navbar__list-items">
            <Link
              className={`navbar__links ${
                url.includes("/portfolio") ? "navbar__links--active" : ""
              }`}
              to="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li className="navbar__list-items">
            <Link
              className={`navbar__links ${
                url.includes("/contact") ? "navbar__links--active" : ""
              }`}
              to="/contact"
            >
              Contact_Me
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;

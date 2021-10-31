import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  const ampersand = React.createElement("span", {
    dangerouslySetInnerHTML: { __html: "&amp;&amp;" },
  });

  return (
    <header>
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__list-items">
            <Link className="navbar__links" to="/about_me">
              About_Me
            </Link>
          </li>
          <li className="navbar__list-items">
            <Link className="navbar__links" to="/skills_and_services">
              Skills {ampersand} Services
            </Link>
          </li>
          <li className="navbar__list-items">
            <Link className="navbar__links" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="navbar__list-items">
            <Link className="navbar__links" to="/contact_me">
              Contact_Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

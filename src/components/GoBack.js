import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const GoBack = () => {
  return (
    <h1 className="go-back">
      <Link className="go-back__link" to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
        <span className="go-back__text">Home_Page</span>
      </Link>
    </h1>
  );
};

export default GoBack;

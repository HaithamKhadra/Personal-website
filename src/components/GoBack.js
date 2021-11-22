import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimateSharedLayout } from "framer-motion";

const GoBack = () => {
  return (
    <h1 className="go-back">
      <Link className="go-back__link" to="/">
        <AnimateSharedLayout>
          <motion.span
            style={{ position: "relative" }}
            layout
            initial={{ left: 10 }}
            animate={{ left: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              yoyo: Infinity,
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </motion.span>
        </AnimateSharedLayout>
        <span className="go-back__text">Home_Page</span>
      </Link>
    </h1>
  );
};

export default GoBack;

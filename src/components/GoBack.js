import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimateSharedLayout } from "framer-motion";

const GoBack = () => {
  return (
    <motion.h1
      className="go-back"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "Spring",
        stiffness: 25,
        duration: 1,
      }}
    >
      <Link className="go-back__link" to="/">
        <AnimateSharedLayout>
          <motion.span
            style={{ position: "relative" }}
            layout
            initial={{ left: 10 }}
            animate={{ left: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.75,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </motion.span>
        </AnimateSharedLayout>
        <span className="go-back__text">Home_Page</span>
      </Link>
    </motion.h1>
  );
};

export default GoBack;

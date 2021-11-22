import React from "react";
import Navbar from "./Navbar";
import "../pages/index.scss";
// import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <main className="main">
      <Navbar />
      {children}
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;

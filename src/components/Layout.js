import React from "react";
import Navbar from "./Navbar";

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

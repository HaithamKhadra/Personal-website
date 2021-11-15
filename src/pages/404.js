import React from "react";
import Layout from "../components/Layout";
import GoBack from "../components/GoBack";
// import Seo from "../components/Seo";

const error = () => {
  return (
    <Layout>
      {/* <Seo title="Error 404: Not Found!" description="404 not found" /> */}
      <GoBack />
      <section className="error pdmg">
        <h2 className="error__heading">Error 404: Page Not Found</h2>
        <p className="error__text">
          The Page you are trying to reach does not exist!
        </p>
        <p className="error__text">
          If this error persist! Kindly refer to Navigation bar while surfing
          this website
        </p>
      </section>
    </Layout>
  );
};

export default error;

import * as React from "react";
import Layout from "../components/Layout";
import "./index.scss";
import Coding from "../svg/Coding";
import SEO from "../components/SEO";

const IndexPage = () => {
  const greaterThan = React.createElement("span", {
    dangerouslySetInnerHTML: { __html: "&gt;" },
  });
  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero">
        <Coding />
        <div className="hero__text-wrapper">
          <p className="hero__text">{greaterThan} Hello world!</p>
          <p className="hero__text">
            {greaterThan} I am
            <span className="hero__my-name"> "Haitham Khadra"</span>
          </p>
          <p className="hero__text">{greaterThan} Front-End Developer</p>
          <div className="hero__call-to-action">
            <button className="hero__hire-me">hire me</button>
            <button className="hero__resume">resume</button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

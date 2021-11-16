import * as React from "react";
import Layout from "../components/Layout";
// import "./index.scss";
import Coding from "../svg/Coding";
import { Link } from "gatsby";
import Seo from "../components/Seo";

const IndexPage = () => {
  const greaterThan = React.createElement("span", {
    dangerouslySetInnerHTML: { __html: "&gt;" },
  });

  const schema = [
    {
      "@context": "http://schema.org",
      "@type": "LocalBusiness",
      name: "Haitham Khadra",
      email: "haithamkhadra@hotmail.com",
      url: "https://haitham-khadra.netlify.app/about",
    },
    {
      "@context": "http://schema.org",
      "@type": "LocalBusiness",
      name: "Haitham Khadra",
      email: "haithamkhadra@hotmail.com",
      url: "https://haitham-khadra.netlify.app/skills-services",
    },
    {
      "@context": "http://schema.org",
      "@type": "LocalBusiness",
      name: "Haitham Khadra",
      email: "haithamkhadra@hotmail.com",
      url: "https://haitham-khadra.netlify.app/portfolio",
    },
    {
      "@context": "http://schema.org",
      "@type": "LocalBusiness",
      name: "Haitham Khadra",
      email: "haithamkhadra@hotmail.com",
      url: "https://haitham-khadra.netlify.app/contact",
    },
    {
      "@context": "http://schema.org",
      "@type": "LocalBusiness",
      name: '"Haitham Khadra"',
      email: "haithamkhadra@hotmail.com",
      url: "https://haitham-khadra.netlify.app/contact",
    },
    {
      "@context": "http://schema.org",
      "@type": "LocalBusiness",
      name: "Haitham Khadra",
      email: "haithamkhadra@hotmail.com",
      url: "https://www.google.com/",
    },
  ];
  return (
    <Layout>
      <Seo
        title="Home"
        description="My name is Haitham khadra,
        I am a self-taught programmer with a Bachelor degree in Biology.
        I have experience in coding
        personal and freelance projects using JavaScript, HTML, CSS,
        React, Gatsby, SQL, Python, Django and Git."
        schemaMarkup={schema}
      />
      <section className="hero">
        <Coding />
        <div className="hero__text-wrapper">
          <h1 className="hero__text">{greaterThan} Hello world!</h1>
          <h2 className="hero__text">
            {greaterThan} I am
            <span className="hero__my-name"> "Haitham Khadra"</span>
          </h2>
          <h3 className="hero__text">{greaterThan} Front-End Developer</h3>
          <div className="hero__call-to-action">
            {/* <a rel="noreferrer" href={project.ghLink} className="hero__hire-me">
              hire me
            </a> */}
            {/* <button className="hero__hire-me">
            </button> */}
            <Link className="hero__link" to="/contact">
              hire me
            </Link>
            <a
              className="hero__link"
              rel="noreferrer"
              href="https://www.google.com"
              target="_blank"
            >
              resume
            </a>
            {/* <button className="hero__resume">
            </button> */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

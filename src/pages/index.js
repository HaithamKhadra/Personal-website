import * as React from "react";
import Layout from "../components/Layout";
import Coding from "../svg/Coding";
import { Link } from "gatsby";
import Seo from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";
import { motion } from "framer-motion";
import { anime } from "../components/Animations";

const IndexPage = () => {
  const greaterThan = React.createElement("span", {
    dangerouslySetInnerHTML: { __html: "&gt;" },
  });

  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);

  const schema = [
    {
      "@context": "http://schema.org",
      "@type": "Portfolio",
      name: "Haitham Khadra",
      email: "haithamkhadra@hotmail.com",
      url: "https://haitham-khadra.netlify.app/",
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
      <motion.section
        className="hero"
        initial="hidden"
        animate="visible"
        variants={anime}
      >
        <Coding />
        <div className="hero__text-wrapper">
          <h1 className="hero__text">{greaterThan} Hello, world!</h1>
          <h2 className="hero__text">
            {greaterThan} I am
            <span className="hero__my-name"> "Haitham Khadra"</span>
          </h2>
          <h3 className="hero__text">{greaterThan} Front-End Developer</h3>
          <div className="hero__call-to-action">
            <Link className="hero__link" to="/contact">
              hire me
            </Link>
            <a
              className="hero__link"
              rel="noreferrer"
              href={data.allFile.edges[0].node.publicURL}
              target="_blank"
            >
              resume
            </a>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default IndexPage;

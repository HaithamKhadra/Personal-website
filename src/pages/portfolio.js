import React from "react";
import Layout from "../components/Layout";
import GoBack from "../components/GoBack";
import Seo from "../components/Seo";
import { graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { anime } from "../components/Animations";

const portfolio = ({ data }) => {
  const {
    allContentfulProject: { nodes: projects },
  } = data;

  return (
    <Layout>
      <Seo
        title="Portfolio"
        description="my portfolio page to showcase the projects that I finished and those that I am still working on"
      />
      <GoBack />
      <motion.section
        className="projects pdmg"
        initial="hidden"
        animate="visible"
        variants={anime}
      >
        <h2 className="projects__heading">My Portfolio</h2>
        <div className="projects__container">
          {projects.map((project, key) => {
            return (
              <motion.div
                key={key}
                className="projects__card"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "Spring",
                  stiffness: 25,
                  duration: 0.75,
                  delay: key * 0.5,
                }}
              >
                <div className="projects__img-wrapper">
                  <img src={project.image.fluid.src} alt="screenshot " />
                </div>
                <div className="projects__details">
                  <h3 className="projects__project-title">{project.title}</h3>
                  <p className="projects__description">
                    {project.description.description}
                  </p>
                  <ul className="projects__tech-stack">
                    {project.techStach.map((tech, key) => {
                      return (
                        <li key={key} className="projects__tools">
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="projects__links">
                    <a
                      rel="noreferrer"
                      href={project.ghLink}
                      target="_blank"
                      className="projects__link-code"
                    >
                      <FontAwesomeIcon
                        className="projects__icon"
                        icon={faCode}
                      />
                      Code
                    </a>
                    <a
                      rel="noreferrer"
                      href={project.liveUrl}
                      target="_blank"
                      className="projects__link-live"
                    >
                      <FontAwesomeIcon
                        className="projects__icon"
                        icon={faExternalLinkAlt}
                      />
                      Live
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulProject(sort: { fields: updatedAt, order: DESC }) {
      nodes {
        id
        title
        description {
          description
        }
        techStach
        ghLink
        liveUrl
        image {
          fluid(toFormat: WEBP) {
            src
          }
        }
      }
    }
  }
`;

export default portfolio;

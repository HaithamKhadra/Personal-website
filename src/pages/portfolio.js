import React from "react";
import Layout from "../components/Layout";
import GoBack from "../components/GoBack";
import { graphql } from "gatsby";

const portfolio = ({ data }) => {
  const {
    allContentfulProject: { nodes: projects },
  } = data;

  return (
    <Layout>
      <GoBack />
      <section className="projects pdmg">
        <h2 className="projects__heading">My Portfolio</h2>
        <div className="projects__container">
          {projects.map((project, key) => {
            return (
              <div key={key} className="projects__card">
                <div className="projects__img-wrapper">
                  <img src={project.image.fluid.src} alt="screenshot" />
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
                      Code
                    </a>
                    <a
                      rel="noreferrer"
                      href={project.liveUrl}
                      target="_blank"
                      className="projects__link-live"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulProject {
      nodes {
        id
        title
        description {
          description
        }
        techStach
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        ghLink
        liveUrl
      }
    }
  }
`;

export default portfolio;

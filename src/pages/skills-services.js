import React from "react";
import Layout from "../components/Layout";
import GoBack from "../components/GoBack";

const skills_and_services = () => {
  return (
    <Layout>
      <GoBack />
      <section className="services pdmg">
        <h2 className="services__heading">Services</h2>
        <div className="services__flex-container">
          <article className="services__cat">
            <h3 className="services__cat-heading">Front-End Development</h3>
            <p className="services__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quam
              dolor assumenda nihil, aperiam nostrum!
            </p>
          </article>
          <article className="services__cat">
            <h3 className="services__cat-heading">Back-End Development</h3>
            <p className="services__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quam
              dolor assumenda nihil, aperiam nostrum!
            </p>
          </article>
          <article className="services__cat">
            <h3 className="services__cat-heading">SEO Optimization</h3>
            <p className="services__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quam
              dolor assumenda nihil, aperiam nostrum!
            </p>
          </article>
        </div>
      </section>
      <section className="skills pdmg">
        <h2 className="skills__heading">Skills</h2>
        <div className="skills__flex-container">
          <div className="skills__cat">
            <h3 className="skills__cat-heading">Languages</h3>
            <ul className="skills__tools">
              <li className="skills__tool-item">JavaScript</li>
              <li className="skills__tool-item">Python</li>
              <li className="skills__tool-item">CSS</li>
              <li className="skills__tool-item">HTML</li>
              <li className="skills__tool-item">SQL</li>
            </ul>
          </div>
          <div className="skills__cat">
            <h3 className="skills__cat-heading">Frameworks</h3>
            <ul className="skills__tools">
              <li className="skills__tool-item">React</li>
              <li className="skills__tool-item">Django</li>
              <li className="skills__tool-item">Gatsby</li>
              <li className="skills__tool-item">Bootstrap</li>
              <li className="skills__tool-item">Sass/Scss</li>
            </ul>
          </div>
          <div className="skills__cat">
            <h3 className="skills__cat-heading">Other Tools</h3>
            <ul className="skills__tools">
              <li className="skills__tool-item">GraphQL</li>
              <li className="skills__tool-item">Git</li>
              <li className="skills__tool-item">GitHub</li>
              <li className="skills__tool-item">Figma</li>
              <li className="skills__tool-item">VS Code</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default skills_and_services;

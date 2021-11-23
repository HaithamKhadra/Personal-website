import React from "react";
import Layout from "../components/Layout";
import GoBack from "../components/GoBack";
import Seo from "../components/Seo";
import { motion } from "framer-motion";

const skills_and_services = () => {
  const anim = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "Spring",
        stiffness: 25,
        duration: 0.75,
      },
    },
    hidden: { opacity: 0, y: 10 },
  };
  return (
    <Layout>
      <Seo
        title="Skills and Services"
        description="Services and skills that I can offer, at the time of viewing this page."
      />
      <GoBack />
      <motion.section
        className="services pdmg"
        initial="hidden"
        animate="visible"
        variants={anim}
      >
        <h2 className="services__heading">Services</h2>
        <div className="services__flex-container">
          <article className="services__cat">
            <h3 className="services__cat-heading">Front-End Development</h3>
            <p className="services__text">
              Using HTML, CSS, and JavaScript, with the help of React, Gatsby
              and APIs. I am able to bring any Design concept to life, while
              also following SEO best practices.
            </p>
          </article>
          <article className="services__cat">
            <h3 className="services__cat-heading">Back-End Development</h3>
            <p className="services__text">
              Utilizing good knowledge in Python and SQL, I can find digital
              solutions for your business needs, with the help of Django
              Framework.
            </p>
          </article>
        </div>
      </motion.section>
      <motion.section
        className="skills pdmg"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
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
      </motion.section>
    </Layout>
  );
};

export default skills_and_services;

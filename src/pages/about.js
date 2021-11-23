import React from "react";
import Layout from "../components/Layout";
import ProfileSvg from "../svg/ProfileSvg";
import GoBack from "../components/GoBack";
import Seo from "../components/Seo";
import { Link } from "gatsby";
import { motion } from "framer-motion";

const about_me = () => {
  return (
    <Layout>
      <Seo
        title="About"
        description="About me (haitham khadra, the owner of this website). In this page I introduce myself to the visitors of my website."
      />
      <GoBack />
      <motion.section className="about pdmg">
        <article className="about__article">
          <h2 className="about__title">About_Me</h2>
          <p className="about__paragraph">I am a self-taught Programmer</p>
          <p className="about__paragraph">
            Passionate, motivated programmer, who's always looking for the next
            challenge or problem to solve
          </p>
          <p className="about__paragraph">
            Quick and avid learner, consistently trying to improve my skillset
            and learn new tools to help me in building projects
          </p>
          <p className="about__paragraph">
            If you are looking for a responsive, user-friendly website for your
            organization, business or product, feel free to{" "}
            <Link to="/contact">contact me</Link>
          </p>
        </article>
        <ProfileSvg />
      </motion.section>
    </Layout>
  );
};

export default about_me;

import React from "react";
import Layout from "../components/Layout";
import GoBack from "../components/GoBack";
import Seo from "../components/Seo";
import Mail from "../svg/Mail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const contact_me = () => {
  return (
    <Layout>
      <Seo
        title="Contact Me"
        description="If you are looking for a responsive, user-friendly website for your organization, business or product, feel free to contact me."
      />

      <GoBack />
      <div className="container pdmg">
        <section className="contact">
          <h2 className="contact__heading">Get In Touch:</h2>
          <form className="contact__form" method="post">
            <div className="contact__form__group">
              <label htmlFor="inputEmail" className="contact__form__label">
                Email
              </label>
              <input
                type="text"
                name="inputEmail"
                id="inputEmail"
                className="contact__form__input"
              />
            </div>
            <div className="contact__form__group">
              <label htmlFor="inputEmail" className="contact__form__label">
                Subject
              </label>
              <input
                type="text"
                name="inputSubject"
                id="inputSubject"
                className="contact__form__input"
              />
            </div>
            <div className="contact__form__group">
              <label htmlFor="textarea" className="contact__form__label">
                Message
              </label>
              <textarea
                className="contact__form__textarea"
                name="textarea"
                id="textarea"
              ></textarea>
            </div>
            <button className="contact__form__btn" type="submit">
              Send
            </button>
          </form>
        </section>
        <section className="accounts">
          <h2 className="accounts__heading">Or reach me on!</h2>
          <div className="accounts__flex">
            <ul className="accounts__list">
              <li className="accounts__list-item">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/HaithamKhadra"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className="accounts__list-item">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://twitter.com/haitham__k"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="accounts__list-item">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://linkedin.com/in/haitham-khadra"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li className="accounts__list-item">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="mailto:haithamkhadra@hotmail.com"
                >
                  <FontAwesomeIcon icon={faAt} />
                </a>
              </li>
            </ul>
            <Mail />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default contact_me;

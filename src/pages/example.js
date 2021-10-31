import React from "react";
// import Header from "../components/Header"
import { graphql } from "gatsby";

const example = ({ data }) => {
  const {
    site: {
      meta: {
        author,
        description,
        title,
        person: { name, age },
      },
    },
  } = data;

  return (
    <div>
      <h1>hello from example</h1>
      {/* <Header /> */}
      <h2
        style={{
          color: "red",
        }}
      >
        {title}
      </h2>
      <h2
        style={{
          color: "yellow",
        }}
      >
        {description}
      </h2>
      <h2
        style={{
          color: "green",
        }}
      >
        {author}
      </h2>
      <h2
        style={{
          color: "red",
        }}
      >
        {name} {age}
      </h2>
    </div>
  );
};

export const data = graphql`
  {
    site {
      meta: siteMetadata {
        title
        description
        author
        person {
          name
          age
        }
      }
    }
  }
`;

export default example;

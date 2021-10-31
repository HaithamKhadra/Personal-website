import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

const query = graphql`
  {
    site {
      siteMetadata {
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

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  const metaDesc = description || site.siteMetadata.description;

  return (
    <Helmet
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[{ name: "description", content: metaDesc }]}
    ></Helmet>
  );
};

export default SEO;

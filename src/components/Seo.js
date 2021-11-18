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

const Seo = ({ title, description, schemaMarkup }) => {
  const { site } = useStaticQuery(query);
  const metaDesc = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[{ name: "description", content: metaDesc }]}
    >
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;

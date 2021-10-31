const path = require(`path`);

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Haitham Khadra",
    // siteUrl: `https://www.yourdomain.tld`,
    description: "Personal and Portfolio website of Haitham khadra",
    author: "@haithamkhadra",
    person: {
      name: "haitham Khadra",
      age: "28",
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `uuvm9ob7pz97`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       // {
    //       //   family: `IBM Plex Mono`,
    //       //   variants: [`300`, `500`, `600`, `700`],
    //       // },
    //     ],
    //   },
    // },
  ],
};

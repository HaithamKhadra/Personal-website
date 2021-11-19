const path = require(`path`);

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Haitham Khadra",
    siteUrl: `https://haitham-khadra.netlify.app/`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/src/static/`,
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `uuvm9ob7pz97`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My personal and portfolio website`,
        short_name: `portfolio website`,
        start_url: `/`,
        background_color: `#ffffff00`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};

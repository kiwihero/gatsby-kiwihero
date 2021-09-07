/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "kiwihero",
    description:"Ashley Freels",
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID ,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ,
      },
    },

    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-react-helmet',
    `@contentful/rich-text-react-renderer`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogposts`,
        path: `${__dirname}/src/`,
      },
    },

    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        name: `blogposts`,
        extensions: [`.mdx`, `.md`],
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};



require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Cooking Recipie Blogs`,
    description: `Write your site description here!`,
    author: `@ibaslogic`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-firebase-app` ,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] }
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyDM7VpbgykCjVab_3oimEzGu5BzmE03HOQ",
          authDomain: "blog-site-a3d9d.firebaseapp.com",
          databaseURL: "https://blog-site-a3d9d.firebaseio.com",
          projectId: "blog-site-a3d9d",
          storageBucket: "blog-site-a3d9d.appspot.com",
          messagingSenderId: "486164789431",
          appId: "1:486164789431:web:4943eb6b840c1c217ff532"
        }
      }
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "bvwaq51efzs5",
        accessToken: "4oAdVnO2-BMZg0JnIVA-bQjxIDBj9wNz1XfsIOtV6Ow",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

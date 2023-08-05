/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `thesis`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "public/static/v2.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "pw9dxj9x",
        dataset: "production",
      },
    },
  ],
  // pathPrefix: "/thesis",
};

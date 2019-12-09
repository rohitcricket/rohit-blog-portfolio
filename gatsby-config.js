module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Cloud Trails`,
    author: `Rohit Gupta`,
    description: `The blog about cloud technologies`,
    social: [
      {
        name: `linkedin`,
        url: `https://linkedin.com/in/rohitbmw`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
      {
        name: `portfolio`,
        url: `./portfolio`,
      },
    ],
  },
}

module.exports = {
  siteMetadata: {
    title: `Nền tảng tài trợ thương mại`,
    siteTitleAlt: `Piot`,
    siteHeadline: `Piot`,
    description: `Nền tảng tài trợ thương mại`,
    siteUrl: `https://piot.vn`,
    siteLanguage: `vi`,
    siteImage: `/banner.jpg`,
    author: `@thuanqh`,
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Arvo", "DM Sans"],
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-MSJ205PKLH"],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.piot.vn",
        sitemap: "https://www.piot.vn/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PIOT`,
        short_name: `PIOT`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/lungvang-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-mailchimp`,
    //   options: {
    //     endpoint: '',
    //   },
    // },
  ],
};

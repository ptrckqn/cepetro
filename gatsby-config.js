module.exports = {
  siteMetadata: {
    title: "CEPetro | ",
    description:
      "Central European Petroleum Ltd., registered in Alberta, Canada in 2006, were set up to pursue petroleum exploration opportunities in the European Union.",
    url: "https://www.cepetro.com",
    keywords: [
      "Central European Petroleum",
      "CEPetro",
      "Central European Petro",
      "German Petroleum",
      "Polish Petroleum",
      "Calgary Petroleum",
    ],
    author: "@ptrckqn",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      //Used for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        name: "uploads",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "cepetro",
        start_url: "/",
        display: "minimal-ui",
        icon: "src/images/cep-logo.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat:300,400,700,900"],
        },
      },
    },
    {
      resolve: "gatsby-remark-images",
      options: {
        maxWidth: 2048,
      },
    },
    {
      resolve: "gatsby-remark-copy-linked-files",
      options: {
        destinationDir: "static",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
        ],
      },
    },
    "gatsby-plugin-netlify",
  ],
}

module.exports = {
  siteMetadata: {
    title: "Musikkapelle Markelsheim",
    author: "dreitagebart",
    description: "Offizielle Seite der Musikkapelle Markelsheim",
    siteUrl: "https://www.musikkapelle-markelsheim.de",
    social: {
      twitter: "dreitagebart"
    }
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-root-import",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images`,
        name: "images"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/news`,
        name: "news"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/events`,
        name: "events"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/front`,
        name: "front"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets"
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem"
            }
          },
          {
            resolve: "gatsby-remark-vscode"
          },
          {
            resolve: "gatsby-remark-copy-linked-files"
          },
          {
            resolve: "gatsby-remark-smartypants"
          }
        ],
        plugins: ["gatsby-remark-images"]
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "dreitagebart.io",
        short_name: "dreitagebart",
        start_url: "/",
        background_color: "#efefef",
        theme_color: "#333333",
        display: "minimal-ui",
        icon: "src/assets/images/favicon.png"
      }
    },
    "gatsby-plugin-offline"
  ]
}

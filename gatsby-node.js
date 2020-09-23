const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  let posts = []

  try {
    const events = await graphql(
      `
        {
          allMdx(
            filter: { fileAbsolutePath: { glob: "**/events/**" } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `
    )

    posts = events.data.allMdx.edges

    events.data.allMdx.edges.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      console.log("events post.node.fields.slug", post.node.fields.slug)
      createPage({
        path: `event${post.node.fields.slug}`,
        component: path.resolve("./src/templates/events.tsx"),
        context: {
          slug: post.node.fields.slug,
          previous,
          next
        }
      })
    })
  } catch (error) {
    console.warn(error)
  }

  try {
    const front = await graphql(
      `
        {
          allMdx(
            filter: { fileAbsolutePath: { glob: "**/front/**" } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `
    )

    posts = front.data.allMdx.edges

    front.data.allMdx.edges.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      console.log("front post.node.fields.slug", post.node.fields.slug)
      createPage({
        path: `front${post.node.fields.slug}`,
        component: path.resolve("./src/templates/front.tsx"),
        context: {
          slug: post.node.fields.slug,
          previous,
          next
        }
      })
    })
  } catch (error) {
    console.warn(error)
  }

  try {
    const news = await graphql(
      `
        {
          allMdx(
            filter: { fileAbsolutePath: { glob: "**/news/**" } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `
    )

    posts = news.data.allMdx.edges

    news.data.allMdx.edges.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      console.log("news post.node.fields.slug", post.node.fields.slug)
      createPage({
        path: `news${post.node.fields.slug}`,
        component: path.resolve("./src/templates/news.tsx"),
        context: {
          slug: post.node.fields.slug,
          previous,
          next
        }
      })
    })
  } catch (error) {
    console.warn(error)
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: "slug",
      node,
      value
    })
  }
}

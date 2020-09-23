import React, { Fragment } from "react"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box } from "@dreitagebart/box"

import { Blockquote, Heading, Paragraph, Text } from "../components"
import { MainLayout } from "../layouts"

const Page: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "squad.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allMdx(
        filter: { fileAbsolutePath: { glob: "**/news/**" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            body
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(locale: "de", formatString: "dddd, Do MMMM YYYY")
              fromNow: date(locale: "de", fromNow: true)
              title
              description
            }
          }
        }
      }
    }
  `)

  return (
    <MainLayout>
      <Heading>Herzlich Willkommen!</Heading>
      <Box align="center" justify="center">
        <h3>Gute Unterhaltung von klassisch bis modern</h3>
        <Image
          fadeIn
          fluid={data.image.childImageSharp.fluid}
          style={{
            marginTop: "1em",
            width: "100%",
            height: "auto",
            maxWidth: 800
          }}
          alt="Gruppenbild auf dem Weinberg Markelsheim"
        />
        <Blockquote>
          <h2>
            Ohne die Musik wäre das Leben ein Irrtum -{" "}
            <Text italic>Friedrich Nietzsche</Text>
          </h2>
        </Blockquote>
      </Box>
      <Heading>Neuigkeiten</Heading>
      {data.allMdx.edges.map((news: any) => {
        return (
          <Fragment key={news.node.id}>
            <Link to={`/news${news.node.fields.slug}`}>
              <h2>{news.node.frontmatter.title}</h2>
            </Link>
            <Text bold>{news.node.frontmatter.date}</Text>
            <Paragraph>
              <MDXRenderer>{news.node.body}</MDXRenderer>
            </Paragraph>
          </Fragment>
        )
      })}
    </MainLayout>
  )
}

export default Page

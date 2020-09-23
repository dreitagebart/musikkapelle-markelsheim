import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

import { Heading } from "../components"
import { MainLayout } from "../layouts"

interface Props {}

const Page: React.FC<Props> = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fields: { slug: { glob: "/news/**" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "dddd, Do MMMM YYYY - HH:mm")
              fromNow: date(fromNow: true)
              title
              description
            }
          }
        }
      }
    }
  `)

  return (
    <MainLayout title="Neuigkeiten">
      <Heading>Neuigkeiten</Heading>
      {data.allMdx.edges.map((news: any) => {
        return (
          <h3 key={news.node.id}>
            <Link to={news.node.fields.slug}>
              {news.node.frontmatter.title}
            </Link>
          </h3>
        )
      })}
    </MainLayout>
  )
}

export default Page

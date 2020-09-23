import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import { MainLayout } from "../layouts"
import { Heading } from "../components"

interface Props {}

const Page: React.FC<Props> = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { glob: "**/events/**" } }
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
    <MainLayout title="Termine">
      <Heading>Termine</Heading>
      {data.allMdx.edges.map((event: any) => {
        return (
          <h3 key={event.node.id}>
            <Link to={`/event${event.node.fields.slug}`}>
              {event.node.frontmatter.title}
            </Link>
          </h3>
        )
      })}
    </MainLayout>
  )
}

export default Page

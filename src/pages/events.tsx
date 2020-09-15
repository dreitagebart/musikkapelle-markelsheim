import React from "react"
import { graphql } from "gatsby"

import { MainLayout } from "../layouts"
import { Heading } from "../components"

interface Props {
  data: any
}

const Page: React.FC<Props> = ({ data, ...props }) => {
  return (
    <MainLayout title="Termine">
      <Heading>Termine</Heading>
      {data.allMdx.edges.map((event: any) => {
        return <h3 key={event.node.id}>{event.node.frontmatter.title}</h3>
      })}
    </MainLayout>
  )
}

export default Page

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
`

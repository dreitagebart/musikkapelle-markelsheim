import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { MainLayout } from "../layouts"

interface Props {
  data: any
  pageContext: any
}

const _Small = styled.div`
  font-size: 14px;
  font-weight: lighter;
  letter-spacing: 1px;
  margin-bottom: 12px;
`

const Template: React.FC<Props> = ({ data, pageContext }) => {
  const post = data.mdx
  const { previous, next } = pageContext

  return (
    <MainLayout>
      <h1>{post.frontmatter.title}</h1>
      <_Small>{post.frontmatter.date}</_Small>
      <MDXRenderer>{post.body}</MDXRenderer>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          listStyle: "none",
          padding: 0
        }}
      >
        <li>
          {previous && (
            <Link to={`/news${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={`/news${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </MainLayout>
  )
}

export default Template

export const pageQuery = graphql`
  query News($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        date(formatString: "dddd, Do MMMM YYYY - HH:mm")
        description
      }
    }
  }
`

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export interface SEOProps {
  description: string
  lang: string
  meta: Array<any>
  title: string
}

export const SEO: React.FC<Partial<SEOProps>> = ({
  description = "",
  lang = "de",
  meta = [],
  title = ""
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  let siteTitle = site.siteMetadata.title

  if (title) {
    siteTitle = `${title} - ${siteTitle}`
  }

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={siteTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: "description",
          content: metaDescription
        },
        {
          property: "og:title",
          content: siteTitle
        },
        {
          property: "og:description",
          content: metaDescription
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata.author
        },
        {
          name: "twitter:title",
          content: siteTitle
        },
        {
          name: "twitter:description",
          content: metaDescription
        }
      ].concat(meta)}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
  )
}

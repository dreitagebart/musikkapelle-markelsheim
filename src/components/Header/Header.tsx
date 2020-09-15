import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Box } from "@dreitagebart/box"
import { graphql, Link, useStaticQuery } from "gatsby"

import { LeafLeft, LeafRight } from "../Leafs"
import { MainMenu } from "../Menu"

interface Props {}

const _Header = styled(Box)``

export const Header: React.FC<Props> = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 200, height: 223) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <_Header direction="column" align="center" padding={{ top: 20 }}>
      <LeafLeft></LeafLeft>
      <LeafRight></LeafRight>
      <Link to="/">
        <Image
          fixed={data.file.childImageSharp.fixed}
          alt="Logo Musikkapelle Markelsheim"
        ></Image>
      </Link>
      <MainMenu></MainMenu>
    </_Header>
  )
}

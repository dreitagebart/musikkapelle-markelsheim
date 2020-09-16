import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import { Heading } from "../../components"
import { ClubLayout } from "../../layouts"
import { Box } from "@dreitagebart/box"

interface Props {}

const _Title = styled.div`
  font-weight: bold;
  font-size: 1.2em;
`

const _List = styled.ul`
  width: 100%;
  margin: 0 20px;
  padding: 0;
  list-style-type: none;
  text-align: center;
`

const _Item = styled.li`
  margin: 0;
  padding: 0;
`

const Page: React.FC<Props> = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "squad.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ClubLayout title="Unsere Musikkapelle">
      <Heading>Unsere Musikkapelle</Heading>
      <Box align="center" justify="center" width="100%">
        <Image
          fluid={data.image.childImageSharp.fluid}
          style={{ width: "100%", height: "auto", maxWidth: 800 }}
          alt="Gruppenbild auf dem Weinberg Markelsheim"
        />
        <Box align="center" justify="center" margin={{ vertical: 20 }}>
          <_List>
            <_Item>
              <_Title>Dirigent</_Title>
            </_Item>
            <_Item>Stephan Deppisch</_Item>
          </_List>
        </Box>
        <Box
          direction="row"
          justify="between"
          margin={{ vertical: 20 }}
          width="100%"
        >
          <_List>
            <_Item>
              <_Title>Klarinette</_Title>
            </_Item>
            <_Item>Corinna Burkert</_Item>
            <_Item>Isabelle Herrmann</_Item>
            <_Item>Tabea Halbmann</_Item>
            <_Item>Verena Hüttl</_Item>
            <_Item>Alfred Kimmelmann</_Item>
            <_Item>Karin Staudt</_Item>
            <_Item>Simone Tatusch</_Item>
          </_List>
          <_List>
            <_Item>
              <_Title>Schlagwerk</_Title>
            </_Item>
            <_Item>Christoph Burkert</_Item>
            <_Item>David Hernadi</_Item>
            <_Item>Lena Kimmelmann</_Item>
          </_List>
          <_List>
            <_Item>
              <_Title>Querflöte</_Title>
            </_Item>
            <_Item>Jule Haas</_Item>
            <_Item>Jelena Kuhn</_Item>
            <_Item>Kristin Peyerl</_Item>
          </_List>
        </Box>
        <Box direction="row" margin={{ vertical: 20 }} width="100%">
          <_List>
            <_Item>
              <_Title>Tenorhorn</_Title>
            </_Item>
            <_Item>Hermann Beck</_Item>
            <_Item>Stefan Büchold</_Item>
            <_Item>Wilfried Zeihsel</_Item>
          </_List>
          <_List>
            <_Item>
              <_Title>Trompete</_Title>
            </_Item>
            <_Item>Jochen Popp</_Item>
            <_Item>Rebeca Schulz</_Item>
          </_List>
          <_List>
            <_Item>
              <_Title>Flügelhorn</_Title>
            </_Item>
            <_Item>Benedikt Mika</_Item>
            <_Item>Fred Prokosch</_Item>
            <_Item>Anton Schneider</_Item>
          </_List>
        </Box>
        <Box direction="row" margin={{ vertical: 20 }} width="100%">
          <_List>
            <_Item>
              <_Title>Bariton</_Title>
            </_Item>
            <_Item>Florian Metzger</_Item>
            <_Item>Eugen Porasil</_Item>
          </_List>
          <_List>
            <_Item>
              <_Title>Posaune</_Title>
            </_Item>
            <_Item>Lukas Halbmann</_Item>
            <_Item>Bastian Hartmann</_Item>
            <_Item>Philipp Hernadi</_Item>
            <_Item>Franz Schmidberger</_Item>
          </_List>
          <_List>
            <_Item>
              <_Title>Bass</_Title>
            </_Item>
            <_Item>Xaver Halbmann</_Item>
            <_Item>Alois Zöllinger</_Item>
          </_List>
        </Box>
        <Box direction="row" margin={{ vertical: 20 }} width="100%">
          <_List>
            <_Item>
              <_Title>Horn</_Title>
            </_Item>
            <_Item>Kai Kimmelmann</_Item>
            <_Item>Sabine Strysak-Halbmann</_Item>
          </_List>
          <_List>
            <_Item>
              <_Title>Fagott</_Title>
            </_Item>
            <_Item>Tizian Halbmann</_Item>
          </_List>
          <_List>
            <_Item>
              <_Title>Saxophon</_Title>
            </_Item>
            <_Item>Nina Helebrand</_Item>
          </_List>
        </Box>
      </Box>
    </ClubLayout>
  )
}

export default Page

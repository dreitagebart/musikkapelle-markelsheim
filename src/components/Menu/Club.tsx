import React from "react"
import styled from "styled-components"
import { Box } from "@dreitagebart/box"
import { Link } from "gatsby"

interface Props {}

const activeStyle: React.CSSProperties = {
  fontWeight: "bold",
  borderBottomColor: "#f03d4d"
}

const _Menu = styled(Box)`
  flex-wrap: wrap;

  a {
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
  }
`

const _Item = styled(Link).attrs(() => ({ activeStyle }))`
  transition: all 300ms ease-in;
  display: inline-block;
  padding: 8px 12px;
  border-bottom: 2px solid #cfcfcf;

  &:hover {
    border-bottom-color: #d62939;
  }
`

export const ClubMenu: React.FC<Props> = () => {
  return (
    <_Menu direction="row" align="center" justify="center" margin={{ top: 20 }}>
      <_Item to="/club">Über uns</_Item>
      <_Item to="/club/membership">Mitgliedschaft</_Item>
      <_Item to="/club/recruitment">Ausbildung</_Item>
      <_Item to="/club/band">Unsere Musikkapelle</_Item>
    </_Menu>
  )
}

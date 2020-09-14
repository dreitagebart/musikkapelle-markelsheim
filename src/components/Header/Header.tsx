import React from "react"
import styled from "styled-components"
import { Box } from "@dreitagebart/box"
import { Link } from "gatsby"

import logo from "../../assets/images/logo.png"
import { LeafLeft, LeafRight } from "../Leafs"
import { Menu } from "../Menu"

interface Props {}

const _Header = styled(Box)``

const _Logo = styled.img``

export const Header: React.FC<Props> = () => {
  return (
    <_Header direction="column" align="center" padding={{ top: 20 }}>
      <LeafLeft></LeafLeft>
      <LeafRight></LeafRight>
      <Link to="/">
        <_Logo src={logo} alt="Logo Musikkapelle Markelsheim"></_Logo>
      </Link>
      <Menu></Menu>
    </_Header>
  )
}

import React, { Fragment, useState } from "react"
import styled, { css } from "styled-components"
import { Box } from "@dreitagebart/box"
import { Link } from "gatsby"
import { LinkGetProps } from "@reach/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import { Hover } from "../Hover"

interface Props {}

interface _MenuProps {
  show: boolean
}

const activeStyle: React.CSSProperties = { fontWeight: "bold" }

const isPartiallyActive = ({ isPartiallyCurrent }: LinkGetProps) => {
  return isPartiallyCurrent ? { style: activeStyle } : {}
}

const _Trigger = styled.div`
  display: none;
  cursor: pointer;
  text-transform: uppercase;

  @media only screen and (max-width: 680px) {
    & {
      display: block;
    }
  }
`

const _Wrapper = styled(Box)`
  @media only screen and (max-width: 680px) {
    & {
      flex-direction: column;
    }

    & > .mobileMenu {
      flex-direction: column;
      border: 1px solid red;
    }
  }
`

const _Menu = styled(Box)<_MenuProps>`
  @media only screen and (max-width: 680px) {
    & {
      border: 1px solid red;
      transition: all 300ms ease-in;
      ${({ show }) =>
        show
          ? css`
              opacity: 1;
              visibility: visible;
              transform: translateY(0);
            `
          : css`
              opacity: 0;
              visibility: hidden;
              transform: translateY(-100%);
            `}
    }
  }
`

const _Item = styled(Link)`
  transition: all 300ms ease-in;
  padding: 8px;
  border-radius: 4px;

  &:hover {
    background: #efefef;
  }
`

const _Burger = styled(FontAwesomeIcon)``

export const MainMenu: React.FC<Props> = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <_Wrapper padding={{ top: 20 }}>
      <_Trigger onClick={() => setToggle(!toggle)}>
        Navigation <_Burger icon={faBars}></_Burger>
      </_Trigger>
      <_Menu className="mobileMenu" direction="row" gutter={8} show={toggle}>
        <_Item to="/club" getProps={isPartiallyActive}>
          <Hover>Verein</Hover>
        </_Item>
        <_Item to="/events" getProps={isPartiallyActive}>
          <Hover>Termine</Hover>
        </_Item>
        <_Item to="/history" getProps={isPartiallyActive}>
          <Hover>Geschichte</Hover>
        </_Item>
        <_Item to="/images" getProps={isPartiallyActive}>
          <Hover>Bilder</Hover>
        </_Item>
        <_Item to="/markelsheim" getProps={isPartiallyActive}>
          <Hover>Markelsheim</Hover>
        </_Item>
        <_Item to="/links" getProps={isPartiallyActive}>
          <Hover>Links</Hover>
        </_Item>
        <_Item to="/contact" getProps={isPartiallyActive}>
          <Hover>Kontakt</Hover>
        </_Item>
      </_Menu>
    </_Wrapper>
  )
}

import React, { useState } from "react"
import styled, { css } from "styled-components"
import { Box } from "@dreitagebart/box"
import { Link } from "gatsby"
import { LinkGetProps } from "@reach/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"

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
  font-size: 14px;
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
      align-items: center;
      width: 100%;
    }

    & > .mobileMenu {
      padding-top: 1em;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }
`

const _Menu = styled(Box)<_MenuProps>`
  @media only screen and (max-width: 680px) {
    & {
      overflow: hidden;
      transition: all 300ms ease-out;
      ${({ show }) =>
        show
          ? css`
              height: auto;
              opacity: 1;
              visibility: visible;
              transform: translateY(0);
            `
          : css`
              opacity: 0;
              visibility: hidden;
              transform: translateY(-100%);
              height: 0;
            `}
    }
  }
`

const _Item = styled(Link)`
  transition: all 300ms ease-in;
  padding: 12px;
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
        Navigation{" "}
        <_Burger icon={toggle ? faChevronUp : faChevronDown}></_Burger>
      </_Trigger>
      <_Menu className="mobileMenu" direction="row" gutter={8} show={toggle}>
        <_Item to="/club" getProps={isPartiallyActive}>
          Verein
        </_Item>
        <_Item to="/events" getProps={isPartiallyActive}>
          Termine
        </_Item>
        <_Item to="/history" getProps={isPartiallyActive}>
          Geschichte
        </_Item>
        <_Item to="/images" getProps={isPartiallyActive}>
          Bilder
        </_Item>
        <_Item to="/markelsheim" getProps={isPartiallyActive}>
          Markelsheim
        </_Item>
        <_Item to="/links" getProps={isPartiallyActive}>
          Links
        </_Item>
        <_Item to="/contact" getProps={isPartiallyActive}>
          Kontakt
        </_Item>
      </_Menu>
    </_Wrapper>
  )
}

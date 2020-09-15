import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Box } from "@dreitagebart/box"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faHeart } from "@fortawesome/free-solid-svg-icons"

interface Props {}

const _Footer = styled(Box)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  color: #efefef;
  height: 120px;

  & a {
    transition: color 300ms ease-in;
    color: #efefef;
  }

  & a:hover {
    color: #cfcfcf;
  }
`

const _MadeWith = styled(Box)`
  font-size: 14px;
`

const _Code = styled(FontAwesomeIcon)`
  color: #afafaf;
`

const _Love = styled(FontAwesomeIcon)`
  color: #eb4138;
`

export const Footer: React.FC<Props> = () => {
  return (
    <_Footer
      direction="column"
      align="center"
      justify="center"
      padding={20}
      gutter={20}
      background="#222"
    >
      <Box direction="row" gutter={20} align="center">
        <Link to="/impressum">Impressum</Link>
        <Link to="/member">Mitglied werden</Link>
        <Link to="/contact">Kontakt</Link>
      </Box>
      <_MadeWith direction="row" gutter={8} align="center">
        <_Code icon={faCode}></_Code>
        <div>with</div>
        <_Love icon={faHeart}></_Love>
        <div>by</div>
        <div>
          <a href="https://dreitagebart.io" target="_blank">
            dreitagebart
          </a>
        </div>
      </_MadeWith>
    </_Footer>
  )
}

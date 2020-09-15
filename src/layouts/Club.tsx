import React from "react"
import styled from "styled-components"

import {
  Header,
  ClubMenu,
  Content,
  Footer,
  SEO,
  SEOProps,
  GlobalStyle
} from "../components"

interface Props extends Partial<SEOProps> {}

const _Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`

export const ClubLayout: React.FC<Props> = ({ children, ...seo }) => {
  return (
    <_Wrapper>
      <GlobalStyle></GlobalStyle>
      <SEO {...seo}></SEO>
      <Header></Header>
      <ClubMenu></ClubMenu>
      <Content>{children}</Content>
      <Footer></Footer>
    </_Wrapper>
  )
}

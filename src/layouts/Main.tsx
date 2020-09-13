import React from "react"
import styled from "styled-components"

import {
  Header,
  Content,
  Footer,
  SEO,
  SEOProps,
  GlobalStyle
} from "../components"

interface Props extends Partial<SEOProps> {}

const _Wrapper = styled.div`
  position: relative;
  border: 1px solid red;
  height: 100vh;
`

export const MainLayout: React.FC<Props> = ({ children, ...seo }) => {
  return (
    <_Wrapper>
      <GlobalStyle></GlobalStyle>
      <SEO {...seo}></SEO>
      <Header></Header>
      <Content>{children}</Content>
      <Footer></Footer>
    </_Wrapper>
  )
}

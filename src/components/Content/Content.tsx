import React from "react"
import styled from "styled-components"

interface Props {}

const _Content = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 40px 0 40px;
  width: 100%;
  line-height: 1.5;

  @media only screen and (max-width: 800px) {
    max-width: 640px;
  }
`

export const Content: React.FC<Props> = ({ children }) => {
  return <_Content>{children}</_Content>
}

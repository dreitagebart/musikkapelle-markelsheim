import React from "react"
import styled from "styled-components"

interface Props {}

const _Paragraph = styled.p`
  line-height: 1.5;
  margin: 8px 0;
`

export const Paragraph: React.FC<Props> = ({ children }) => {
  return <_Paragraph>{children}</_Paragraph>
}

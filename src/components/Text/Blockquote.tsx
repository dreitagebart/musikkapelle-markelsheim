import React from "react"
import styled from "styled-components"

interface Props {}

const _Blockquote = styled.blockquote`
  /* background: #efefef; */
  border-left: 4px solid #afafaf;
  padding: 12px;
  font-weight: lighter;
`

export const Blockquote: React.FC<Props> = ({ children }) => {
  return <_Blockquote>{children}</_Blockquote>
}

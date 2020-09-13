import React from "react"
import styled from "styled-components"

interface Props {}

const _Footer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`

export const Footer: React.FC<Props> = () => {
  return <_Footer>Ich bin der Footer</_Footer>
}

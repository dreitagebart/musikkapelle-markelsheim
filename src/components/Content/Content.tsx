import React from "react"
import styled from "styled-components"

interface Props {}

const _Content = styled.div``

export const Content: React.FC<Props> = ({ children }) => {
  return <_Content>{children}</_Content>
}

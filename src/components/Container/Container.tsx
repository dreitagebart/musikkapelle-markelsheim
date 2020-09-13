import React from "react"
import styled from "styled-components"

interface Props {}

const _Container = styled.div``

export const Container: React.FC<Props> = ({ children }) => {
  return <_Container>{children}</_Container>
}

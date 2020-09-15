import React from "react"
import styled from "styled-components"
import { Box } from "@dreitagebart/box"

interface Props {}

const _Field = styled(Box)``

export const Field: React.FC<Props> = ({ children }) => {
  return (
    <_Field direction="row" justify="between">
      {children}
    </_Field>
  )
}

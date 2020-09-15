import React from "react"
import styled from "styled-components"
import { Box } from "@dreitagebart/box"

import { Hover } from "../Hover"

interface Props {}

const _Heading = styled.h1``

export const Heading: React.FC<Props> = ({ children }) => {
  return (
    <Box
      align="center"
      justify="center"
      padding={{ bottom: 20, top: 12 }}
      margin={{ bottom: 20 }}
      border={{ bottom: "0.5px solid #cfcfcf" }}
    >
      <_Heading>
        <Hover>{children}</Hover>
      </_Heading>
    </Box>
  )
}

import React from "react"
import styled from "styled-components"

import leaf from "../../assets/images/leafLeft.png"

interface Props {}

const _Leaf = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${leaf}) no-repeat;
  background-position: left top;
  width: 475px;
  height: 325px;

  @media only screen and (max-width: 600px) {
    & {
      display: none;
    }
  }

  @media only screen and (max-width: 800px) {
    & {
      background-size: 75%;
    }
  }
`

export const LeafLeft: React.FC<Props> = () => {
  return <_Leaf></_Leaf>
}

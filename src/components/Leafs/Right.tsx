import React from "react"
import styled from "styled-components"

import leaf from "../../assets/images/leafRight.png"

interface Props {}

const _Leaf = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  background: url(${leaf}) no-repeat;
  background-position: right top;
  width: 415px;
  height: 367px;

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

export const LeafRight: React.FC<Props> = () => {
  return <_Leaf></_Leaf>
}

import React from "react"
import styled, { css } from "styled-components"

interface Props {
  mode?: Mode
}

type Mode = "leftRight" | "rightLeft" | "center"

interface _HoverProps {
  mode: Mode
}

const _Hover = styled.span<_HoverProps>`
  display: inline;
  position: relative;

  &:hover:after {
    width: 100%;
  }

  &:after {
    ${({ mode }) => {
      switch (mode) {
        case "leftRight": {
          return css`
            left: 0;
          `
        }
        case "rightLeft": {
          return css`
            right: 0;
          `
        }
        case "center": {
          return css`
            left: 50%;
            transform: translateX(-50%);
          `
        }
        default: {
          return css``
        }
      }
    }}
    content: "";
    transition: all 300ms ease-in-out;
    backface-visibility: hidden;
    position: absolute;
    height: 0.1rem;
    width: 0;
    bottom: -0.25em;
    background: #000000;
  }
`

export const Hover: React.FC<Props> = ({ children, mode = "center" }) => {
  return <_Hover mode={mode}>{children}</_Hover>
}

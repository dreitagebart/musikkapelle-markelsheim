import React from "react"
import styled, { css } from "styled-components"

interface Props {
  bold?: boolean
}

interface _TextProps {
  bold: boolean
}

const _Text = styled.span<_TextProps>`
  line-height: 1.5;
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
`

export const Text: React.FC<Props> = ({ children, bold = false }) => {
  return <_Text bold={bold}>{children}</_Text>
}

import React from "react"
import styled, { css } from "styled-components"

interface Props {
  bold?: boolean
  italic?: boolean
}

interface _TextProps {
  bold: boolean
  italic: boolean
}

const _Text = styled.span<_TextProps>`
  line-height: 1.5;
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
  ${({ italic }) =>
    italic &&
    css`
      font-style: italic;
    `}
`

export const Text: React.FC<Props> = ({
  children,
  bold = false,
  italic = false
}) => {
  return (
    <_Text bold={bold} italic={italic}>
      {children}
    </_Text>
  )
}

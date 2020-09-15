import React, { ButtonHTMLAttributes } from "react"
import styled from "styled-components"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const _Submit = styled.button`
  cursor: pointer;
`

export const Submit: React.FC<Props> = ({ children, ...props }) => {
  return (
    <_Submit {...props} type="submit">
      {children}
    </_Submit>
  )
}

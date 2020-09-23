import React, { ButtonHTMLAttributes } from "react"
import styled from "styled-components"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const _Submit = styled.button`
  transition: all 300ms ease-in;
  cursor: pointer;
  padding: 12px;
  text-transform: uppercase;
  border-radius: 4px;
  background: #efefef;
  border: 1px solid #cfcfcf;

  &:hover {
    background: #cfcfcf;
  }
`

export const Submit: React.FC<Props> = ({ children, ...props }) => {
  return (
    <_Submit {...props} type="submit">
      {children}
    </_Submit>
  )
}

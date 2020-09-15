import React, { HTMLAttributes } from "react"
import styled from "styled-components"

interface Props extends HTMLAttributes<HTMLLabelElement> {}

const _Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: 1px solid red;
`

export const Label: React.FC<Props> = ({ ...props }) => {
  return <_Label {...props}></_Label>
}

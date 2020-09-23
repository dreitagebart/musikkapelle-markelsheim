import React, { HTMLAttributes } from "react"
import styled from "styled-components"

interface Props extends HTMLAttributes<HTMLLabelElement> {}

const _Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  cursor: pointer;

  @media only screen and (max-width: 680px) {
    & {
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
    }
  }
`

export const Label: React.FC<Props> = ({ ...props }) => {
  return <_Label {...props}></_Label>
}

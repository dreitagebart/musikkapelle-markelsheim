import React, { HTMLAttributes } from "react"
import styled from "styled-components"

interface Props extends HTMLAttributes<HTMLFormElement> {}

const _Form = styled.form`
  width: 100%;
  margin-top: 1em;
`

export const Form: React.FC<Props> = ({ ...props }) => {
  return <_Form {...props}></_Form>
}

import React, { InputHTMLAttributes } from "react"
import styled from "styled-components"

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const _TextInput = styled.input.attrs(({ type }) => ({
  type: type ? type : "text"
}))`
  outline: 0;
  transition: all 300ms ease-in;
  border: 1px solid #afafaf;
  line-height: 1.5;
  border-radius: 4px;
  padding: 12px;
`

export const TextInput: React.FC<Props> = ({ ...props }) => {
  return <_TextInput {...props}></_TextInput>
}

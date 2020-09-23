import React, { TextareaHTMLAttributes } from "react"
import styled from "styled-components"

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const _TextArea = styled.textarea`
  outline: 0;
  transition: all 300ms ease-in;
  border: 1px solid #cfcfcf;
  line-height: 1.5;
  border-radius: 4px;
  padding: 12px;
  width: 600px;
  height: 120px;

  &:hover {
    border: 1px solid #afafaf;
    box-shadow: 0 0 10px #cfcfcf;
  }

  &:focus {
    border: 1px solid #a82626 !important;
    box-shadow: 0 0 10px #cfcfcf;
  }

  @media only screen and (max-width: 680px) {
    & {
      width: 100%;
    }
  }
`

export const TextArea: React.FC<Props> = ({ ...props }) => {
  return <_TextArea {...props}></_TextArea>
}

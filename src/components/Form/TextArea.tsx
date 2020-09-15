import React, { TextareaHTMLAttributes } from "react"
import styled from "styled-components"

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const _TextArea = styled.textarea``

export const TextArea: React.FC<Props> = ({ ...props }) => {
  return <_TextArea {...props}></_TextArea>
}

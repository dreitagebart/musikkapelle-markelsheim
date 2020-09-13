import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"

export const GlobalStyle = createGlobalStyle`
${normalize()}

body {
  width: 100%;
  font-family: 'Montserrat', sans-serif;
}
`

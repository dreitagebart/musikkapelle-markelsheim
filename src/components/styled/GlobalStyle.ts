import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"

export const GlobalStyle = createGlobalStyle`
${normalize()}

* {
  box-sizing: border-box;
}

body {
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, .004);
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

p {
  margin: 0;
}

a {
  transition: color 300ms ease-in;
  color: #333;
  text-decoration: none;
}

a:hover {
  color: #555;
}
`

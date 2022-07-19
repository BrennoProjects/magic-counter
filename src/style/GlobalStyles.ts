import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
.App {
  width: 100vw;
  height: 100vh;
  background-color: ${({theme})=> theme.background};
}
body, html {
  margin: 0px;
}
`;

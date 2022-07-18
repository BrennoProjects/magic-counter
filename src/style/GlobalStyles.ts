import { createGlobalStyle } from "styled-components";
import palette from "./theme.ts";

export default createGlobalStyle`
.App {
  width: 100vw;
  height: 100vh;
  background-color: ${palette.black};
}
body, html {
  margin: 0px;
}
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
.App {
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden !important;
}
body, html {
  margin: 0px;
  background-color: ${({ theme }) => theme.background};
  overflow: hidden !important;
}
*{
  font-family: ${({ theme }) => theme.font};
};
`;

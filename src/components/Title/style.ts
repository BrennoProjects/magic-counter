import styled from "styled-components"

const FontTitle = styled.h1`
  margin: 40px 0 20px 0;
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  font-weight: bolder;
  color: ${({theme})=> theme.title};
  background-color: transparent;
`
export default FontTitle

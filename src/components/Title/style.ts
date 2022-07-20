import styled from "styled-components"

interface WrapperTitle {
  margin: string;
  fontSize: string;
  bold: string;
}

const FontTitle = styled.h1<WrapperTitle>`
  margin: ${({ margin }) => margin};
  font-family: "Roboto", sans-serif;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ bold }) => bold};
  color: ${({ theme }) => theme.title};
  background-color: transparent;
`
export default FontTitle

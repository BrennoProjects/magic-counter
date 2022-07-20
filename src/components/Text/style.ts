import styled from "styled-components";

interface WrapperText {
  margin: string;
  fontSize: string;
  bold: string;
}

const FontText = styled.p<WrapperText>`
  margin: ${({ margin }) => margin};
  font-family: "Roboto", sans-serif;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ bold }) => bold};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
`;

export default FontText;

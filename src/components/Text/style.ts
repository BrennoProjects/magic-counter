import styled from "styled-components";

interface WrapperText {
  margin: string;
  fontSize: string;
  bold: boolean;
}

export const FontText = styled.p<WrapperText>`
  margin: ${({ margin }) => margin};
  font-family: ${({theme})=> theme.font};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ bold }) => bold ? '700' : 'normal'};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
`;


import styled from "styled-components"

interface WrapperTitle {
  margin: string;
  fontSize: string;
  bold: boolean;
}

export const FontTitle = styled.h1<WrapperTitle>`
  margin: ${({ margin }) => margin};
  font-family:${({theme})=> theme.font};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ bold }) => bold ? '700' : 'normal'};
  color: ${({ theme }) => theme.title};
  background-color: transparent;
`

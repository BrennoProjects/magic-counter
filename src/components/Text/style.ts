import styled from 'styled-components';

interface FontTextProps {
  margin: string
  fontSize: string
  bold: boolean
  color: string
}

export const FontText = styled.p<FontTextProps>`
  margin: ${({ margin }) => margin};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ bold }) => bold ? '700' : 'normal'};
  color: ${({ color }) => color};
  background-color: transparent;
`;

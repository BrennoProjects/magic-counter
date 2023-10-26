import type{ FC } from 'react';
import * as S from './style';
import { useTheme } from 'styled-components';

interface TextProps {
  children: string
  margin?: string
  fontSize?: string
  bold?: boolean
  color?: string
}

const Text: FC<TextProps> = (props) => {
  const theme = useTheme();
  const { children, margin = '0', fontSize = '36px', bold = true, color = theme.green } = props;
  return (
    <S.FontText margin={margin} fontSize={fontSize} bold={bold} color={color}>
      {children}
    </S.FontText>
  );
};

export default Text;

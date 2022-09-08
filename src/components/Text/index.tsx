import type{ FC } from 'react';
import * as S from './style';

interface TextProps {
  children: string
  margin?: string
  fontSize?: string
  bold?: boolean
}

const Text: FC<TextProps> = (props) => {
  const { children, margin = '0', fontSize = '36px', bold = true } = props;
  return (
    <S.FontText margin={margin} fontSize={fontSize} bold={bold}>
      {children}
    </S.FontText>
  );
};

export default Text;

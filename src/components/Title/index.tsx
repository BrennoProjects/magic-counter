import type { FC } from "react";
import * as S from "./style";

interface TitleProps {
  children: string;
  margin?: string;
  fontSize?: string;
  bold?: string;
}

const Title: FC<TitleProps> = (props) => {
  const { children, margin = "0", fontSize = "36px", bold = "bolder" } = props;
  return (
    <S.FontTitle margin={margin} fontSize={fontSize} bold={bold}>
      {children}
    </S.FontTitle>
  );
};

export default Title;

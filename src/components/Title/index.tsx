import { Children, FC } from "react";
import FontTitle from "./style";

interface TitleProps {
  children: string;
  margin?: string;
  fontSize?: string;
  bold?: string;
}

const Title: FC<TitleProps> = (props) => {
  const { children, margin = "0", fontSize = "36px", bold = "bolder" } = props;
  return (
    <FontTitle margin={margin} fontSize={fontSize} bold={bold}>
      {children}
    </FontTitle>
  );
};

export default Title;

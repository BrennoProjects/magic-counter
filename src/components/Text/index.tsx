import { FC } from "react";
import FontText from "./style";

interface TextProps {
  children: string;
  margin?: string;
  fontSize?: string;
  bold?: string;
}

const Text: FC<TextProps> = (props) => {
  const { children, margin = "0", fontSize = "36px", bold = "bolder" } = props;
  return (
    <FontText margin={margin} fontSize={fontSize} bold={bold}>
      {children}
    </FontText>
  );
};

export default Text;

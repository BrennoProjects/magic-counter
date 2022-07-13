import { FC } from "react";
import * as S from "./styled";

interface ButtonProps {
  children: string | JSX.Element;
  width: string;
  border?: boolean;
  background?: string;
  fullRadius?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    width,
    border = true,
    background = "#000000",
    fullRadius = false
  } = props;
  return (
    <S.WrapperButton
      width={width}
      border={border}
      background={background}
      fullRadius={fullRadius}
    >
      {children}
    </S.WrapperButton>
  );
};

export default Button;

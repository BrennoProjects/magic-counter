import { FC } from "react";
import * as S from "./styled";

interface ButtonProps {
  children: string | JSX.Element;
  width: string;
  height: string;
  border?: boolean;
  background?: string;
  fullRadius?: boolean;
  positionAbsolute?: boolean;
  onClick?: ()=> void;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    width,
    height,
    border = true,
    background = "#000000",
    fullRadius = false,
    positionAbsolute = false,
    onClick
  } = props;
  return (
    <S.WrapperButton
      width={width}
      height={height}
      border={border}
      background={background}
      fullRadius={fullRadius}
      positionAbsolute={positionAbsolute}
      onClick={onClick}
    >
      {children}
    </S.WrapperButton>
  );
};

export default Button;

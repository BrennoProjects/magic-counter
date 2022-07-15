import { FC } from "react";
import * as S from "./styled";

interface ButtonProps {
  children: string | JSX.Element;
  width?: string;
  height?: string;
  border?: boolean;
  background?: string;
  fullRadius?: boolean;
  onClick: ()=> void;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    width = '100%',
    height = '4.375rem',
    border = true,
    background = "#000000",
    fullRadius = false,
    onClick
  } = props;
  return (
    <S.WrapperButton
      width={width}
      height={height}
      border={border}
      background={background}
      fullRadius={fullRadius}
      onClick={onClick}
    >
      {children}
    </S.WrapperButton>
  );
};

export default Button;

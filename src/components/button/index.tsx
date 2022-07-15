import { FC } from "react";
import * as S from "./styled";

interface ButtonProps {
  children: string | JSX.Element;
  width?: string;
  height?: string;
  border?: boolean;
  background?: string;
  rounded?: boolean;
  onClick: ()=> void;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    width = '100%',
    height = '4.375rem',
    border = true,
    background = "#000000",
    rounded = false,
    onClick
  } = props;
  return (
    <S.WrapperButton
      width={width}
      height={height}
      border={border}
      background={background}
      rounded={rounded}
      onClick={onClick}
    >
      {children}
    </S.WrapperButton>
  );
};

export default Button;

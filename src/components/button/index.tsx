import { FC } from "react";
import  * as S  from "./styled";

interface ButtonProps {
  children: string | JSX.Element;
  border?: boolean;
  background?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const {children, border=true, background='transparent'} = props
  return <S.WrapperButton border={border} background={background}>{children}</S.WrapperButton>;
};

export default Button;

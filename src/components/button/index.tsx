import { FC } from "react";
import  * as S  from "./styled";

interface ButtonProps {
  children: string | JSX.Element;
  border?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const {children, border=true} = props
  return <S.WrapperButton border={border}>{children}</S.WrapperButton>;
};

export default Button;

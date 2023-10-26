import { FC, useState } from 'react';
import * as S from './style';

interface ButtonProps {
  children: string | JSX.Element
  width?: string
  height?: string
  border?: boolean
  background?: string
  rounded?: boolean | string
  margin?: string
  onClick: () => void
}

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    width = '100%',
    height = '4.375rem',
    border = true,
    background = 'transparent',
    rounded = false,
    onClick,
    margin = ''
  } = props;
  const [animation, setAnimation] = useState< boolean | 'firsRender'>('firsRender');

  const handleClick = (): void => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 50
    );
    onClick();
  };
  return (
    <S.WrapperButton
      width={width}
      height={height}
      border={border}
      background={background}
      rounded={rounded}
      onClick={handleClick}
      margin={margin}
      animation={animation}
    >
      {children}
    </S.WrapperButton>
  );
};

export default Button;

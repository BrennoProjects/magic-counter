import type { FC } from 'react';
import * as S from './style';

interface NavBarProps {
  children: JSX.Element
}

const NavBar: FC<NavBarProps> = (props) => {
  const { children } = props;
  return <S.WrapperNav>{children}</S.WrapperNav>;
};

export default NavBar;

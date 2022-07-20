import { FC } from "react";
import WrapperNav from "./style";

interface NavBarProps {
  children: JSX.Element;
}

const NavBar: FC<NavBarProps> = (props) => {
  const { children } = props;
  return <WrapperNav>{children}</WrapperNav>;
};

export default NavBar;

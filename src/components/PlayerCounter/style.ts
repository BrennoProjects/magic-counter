import styled from "styled-components";

interface TextHud {
  fontSize: string;
}
interface WrapperPlayer {
  rotate: string;
  width: string;
  height: string;
  marginBottom: string;
  position: string;
}
interface Drawer {
  handleDrawer: boolean;
}
interface Hr{
  handleDrawer: boolean;
}



export const Wrapper = styled.div`
  height: 90%;
  width: 100%;
  position: absolute;
  top: 0;
`
export const addButton = styled.button`
position: absolute;
z-index: 99999;
height: 50%;
width: 100%;
background-color: transparent;
border: transparent;
color: transparent;
top: 0;
`
export const minorButton = styled.button`
position: absolute;
z-index: 99999;
height: 50%;
width: 100%;
background-color: transparent;
border: transparent;
color: transparent;
bottom: 0;
`
export const WrapperPlayer = styled.div<WrapperPlayer>`
  width: ${({width})=> width};
  height: ${({height})=> height};
  display: flex;

  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: ${({position})=>position};
  margin-bottom: ${({marginBottom})=>marginBottom};

  background-color: ${({ theme }) => theme.purple};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transform: ${({ rotate }) => rotate || "unset"};
`;

export const WrapperText = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextHud = styled.span<TextHud>`
  margin: 0;
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ theme }) => theme.title};
  font-weight: 600;
`;

export const Drawer = styled.div<Drawer>`
  width: 100%;
  height: ${({ handleDrawer }) => (handleDrawer ? "100%" : "25px")};
  max-height: 100%;
  min-height: 25px;
  position: absolute;
  transition: 1s;

  background-color: ${({ theme }) => theme.darkPurple};
  border-top-left-radius: ${({ handleDrawer }) => handleDrawer ? "8px" : "0px"};
  border-top-right-radius: ${({handleDrawer }) => handleDrawer ? "8px" : "0px"};
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Hr = styled.hr<Hr>`
  width: 50%;
  height: 8px;
  background-color: ${({ theme }) => theme.title};
  border-radius: 50px;
  border: none;
  position: absolute;
  top: 2px;
`;


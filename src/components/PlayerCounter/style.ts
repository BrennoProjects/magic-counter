import styled from "styled-components";

interface TextHud {
  fontSize: string;
}
interface WrapperPlayer {
  rotate: string;
}
interface Drawer {
  height: number;
}
export const WrapperPlayer = styled.div<WrapperPlayer>`
  width: 95%;
  height: 49%;
  display: flex;

  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;

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
  height: ${({ height }) => String(height + '%') };
  max-height: 100%;
  min-height: 10%;
  background-color: ${({ theme }) => theme.darkPurple};
  position: absolute;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  bottom: 0px;
`;

export const Hr = styled.hr`
  width: 50%;
  height: 6px;
  background-color: ${({ theme }) => theme.title};
  border-radius: 50px;
  border: none;
`;

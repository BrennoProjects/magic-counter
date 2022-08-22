import styled from "styled-components";

interface RotateProps{
  top ?: string;
  bottom ?: string;
}

export const Game = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
export const Rotate = styled.div<RotateProps>`
  transform: rotate(90deg);
  height: 98vw;
  width: 52vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: ${({top}) => top};
  bottom: ${({bottom}) => bottom}
`;

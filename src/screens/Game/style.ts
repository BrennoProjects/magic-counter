import styled from "styled-components";

interface RotatePlayers{
  rotateMiddle?: boolean;
  transform?: string;
}
export const WrapperPlayers = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 95%;

`

export const Game = styled.div`
  width: 98%;
  height: 95%;
  position: relative;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const RotatePlayers = styled.div<RotatePlayers>`
  transform: rotate(90deg);
  height: 95%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`


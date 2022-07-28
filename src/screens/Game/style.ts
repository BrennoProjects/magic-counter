import styled from "styled-components";

interface RotatePlayers{
  rotateMiddle?: boolean;
  transform?: string;
}

export const Game = styled.div`
  width: 100vw;
  height: 98vh;
  position: relative;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const RotatePlayers = styled.div<RotatePlayers>`
  transform: rotate(90deg);
  height: 48%;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`


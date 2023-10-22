import styled from 'styled-components';

interface RotateProps {
  top?: string
  isFourLateral?: boolean
  marginBottom?: string
}

export const Game = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 400px;
  max-height:800px;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

export const Rotate = styled.div<RotateProps>`
  transform: rotate(90deg);
  height: 100vw;
  width: 50vh;
  max-width: 400px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ isFourLateral }) =>
    isFourLateral !== undefined ? '-3vh' : 'unset'};
  margin-bottom: ${({ isFourLateral, marginBottom }) =>
    isFourLateral !== undefined
      ? '-3vh'
      : marginBottom !== undefined
      ? marginBottom
      : 'unset'};
`;

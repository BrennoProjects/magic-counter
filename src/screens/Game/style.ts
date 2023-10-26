import styled from 'styled-components';

interface RotateProps {
  isFourTop?: boolean
  isFourBottom?: boolean
  isFourLateral?: boolean
  marginBottom?: string
  marginTop?: string
}

export const Game = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const sizeConditional = ({ ...props }: RotateProps): string => {
  if (props.isFourBottom === true || props.isFourTop === true) {
    return `
      height: 100vw;
      width: 100%;
      align-items: ${props?.isFourTop === true ? 'end' : 'start'};
      
    `;
  }
  return `
  height: 100vw;
  width: 50vh;
  align-items: center;
  `;
};

export const Rotate = styled.div<RotateProps>`
  ${({ isFourTop, isFourBottom }) => sizeConditional({ isFourBottom: isFourBottom, isFourTop: isFourTop })}
  transform: rotate(90deg);
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  margin-top: ${({ isFourLateral, marginTop }) =>
    isFourLateral !== undefined ? '-3vh' : marginTop !== undefined ? marginTop : 'unset'};
  margin-bottom: ${({ isFourLateral, marginBottom }) =>
    isFourLateral !== undefined
      ? '-3vh'
      : marginBottom !== undefined
      ? marginBottom
      : 'unset'};
`;

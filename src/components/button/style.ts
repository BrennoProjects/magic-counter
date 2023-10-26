import styled, { keyframes } from 'styled-components';

interface WrapperButtonProps {
  width: string
  height: string
  border: boolean
  background: string
  rounded: boolean | string
  margin: string
  animation: boolean | 'firsRender'
}

const animationOn = keyframes`
  from {
    background-color: rgba(0,0,0,0.0);
  }
  to {
    background-color: rgba(0,0,0,0.3);
  }
`;
const animationOff = keyframes`
  from {
    background-color: rgba(0,0,0,0.3);
  }
  to {
    background-color: rgba(0,0,0,0.0.0);
  }
`;

export const WrapperButton = styled.button<WrapperButtonProps>`
  border-color: ${({ theme }) => theme.green};
  border-width: 4px;
  border-style: ${({ border }) => (border ? 'solid' : 'none')};
  border-radius: ${({ rounded }) => (typeof rounded === 'string' ? rounded : rounded ? '100%' : '15px')};
  background-color: ${({ background }) => background};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  position: relative;
  overflow: hidden;
  animation: ${({ animation }) => animation === 'firsRender' ? 'none' : animation ? animationOn : animationOff} 0.2s;
`;

import styled, { keyframes } from 'styled-components';

interface MenuScreenStyleProps {
  show: boolean
  firstRender: boolean
}

const animationOpen = keyframes`
  from {
    border-radius: 100%;
    width: 0px;
    height: 0px;
  }

  to {
    border-radius: 100%;
    width: 200vh;
    height: 200vh;
  }
`;
const animationClose = keyframes`
  from {
    border-radius: 100%;
    width: 200vh;
    height: 200vh;
  }
  to {
    border-radius: 100%;
    width: 0px;
    height: 0px;
  }
`;

export const MenuScreen = styled.div<MenuScreenStyleProps>`
  position: absolute;
  z-index: 15;
  width: ${({ show }) => show ? '100%' : '0px'};
  height: ${({ show }) => show ? '100%' : '0px'};
  overflow: hidden;
  top: '50%';
  left: '50%';
  transform: 'translate(-50%, -50%)';
  background:  ${({ theme }) => theme.backgroundTransparent};
  backdrop-filter: ${({ theme }) => theme.blur};
  /* transition: 1s; */
  animation: ${({ show, firstRender }) => firstRender ? 'none' : show ? animationOpen : animationClose};
  animation-duration: 0.6s;
  display: flex;
  justify-content: center;
`;

export const AlignButtonNav = styled.div`
  display: flex;
  align-content: center;
  justify-content: end;
  width: 100%;
`;

export const WrapperButtons = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

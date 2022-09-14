import styled from 'styled-components';

interface TextHudProps {
  fontSize: string
}
interface WrapperPlayerProps {
  rotate: string
  width: string
  height: string
  marginBottom: string
  position: string
  lenghtCounters: number
}
interface DrawerProps {
  handleDrawer: boolean
}
interface HrProps {
  handleDrawer: boolean
}
interface WrapperCountersProps {
  handleDrawer: boolean
}
interface WrapperLifeProps {
  lenghtCounters: number
}
interface WrapperCountProps {
  lenghtCounters: number
}

export const WrapperCount = styled.div<WrapperCountProps>`
  height: 100%;
  width: ${({ lenghtCounters }) => lenghtCounters > 0 ? '50%' : '100%'};
  position: absolute;
  top: 0;
`;

export const addButton = styled.button`
  position: absolute;
  z-index: 99999;
  height: 50%;
  width: 100%;
  background-color: transparent;
  border: transparent;
  color: transparent;
  top: 0;
`;

export const minorButton = styled.button`
  position: absolute;
  z-index: 99999;
  height: 50%;
  width: 100%;
  background-color: transparent;
  border: transparent;
  color: transparent;
  bottom: 0;
`;

export const WrapperPlayer = styled.div<WrapperPlayerProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;

  justify-content: ${({ lenghtCounters }) => lenghtCounters === 0 ? 'space-around' : 'space-between'};
  align-items: center;
  position: ${({ position }) => position};
  margin-bottom: ${({ marginBottom }) => marginBottom};

  background-color: ${({ theme }) => theme.purple};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transform: ${({ rotate }) => rotate};
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
`;

export const WrapperLife = styled.div<WrapperLifeProps>`
  height: 100%;
  width: ${({ lenghtCounters }) => lenghtCounters === 0 ? '50%' : '100%'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  flex: 0 0 50%
`;

export const TextHud = styled.span<TextHudProps>`
  margin: 0;
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ theme }) => theme.title};
  font-weight: 600;
`;

export const Drawer = styled.div<DrawerProps>`
  width: 100%;
  height: ${({ handleDrawer }) => handleDrawer ? '100%' : '25px'};
  max-height: 100%;
  min-height: 25px;
  position: absolute;
  transition: 1s;

  background-color: ${({ theme }) => theme.darkPurple};
  border-top-left-radius: ${({ handleDrawer }) => handleDrawer ? '8px' : '0px'};
  border-top-right-radius: ${({ handleDrawer }) => handleDrawer ? '8px' : '0px'};
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Hr = styled.hr<HrProps>`
  width: 50%;
  height: 8px;
  background-color: ${({ theme }) => theme.title};
  border-radius: 50px;
  border: none;
  position: absolute;
  top: 2px;
`;

export const WrapperCounters = styled.div<WrapperCountersProps>`
  width: 100%;
  height: ${({ handleDrawer }) => (!handleDrawer ? '100%' : '0%')};
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: ${({ handleDrawer }) => (!handleDrawer ? '-200px' : '50%')};
  transition: 1s;
`;

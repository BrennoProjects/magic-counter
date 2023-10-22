import styled from 'styled-components';

interface WrapperIconProps{
  transform?: string
}
interface WrapperButtonProps{
  fourPlayers?: boolean
}
export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  max-width: 400px;
  width: 100%
`;
export const WrapperSetupPosition = styled.div`
  width: 85vw;
  height: 90vh;
  position: relative;
  max-width: 400px;
  max-height: 800px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const RotateIcons = styled.div`
  transform: rotate(90deg);
  height: 95%;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const WrapperButton = styled.div<WrapperButtonProps>`
  width: 120px;
  height: 233px;
  max-width: 300px;
`;
export const WrapperIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 95%;
`;
export const WrapperIcon = styled.div<WrapperIconProps>`
  background-color: ${({ theme }) => theme.darkPurple};
  width: 100%;
  height: 45%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ transform }) => transform};
`;

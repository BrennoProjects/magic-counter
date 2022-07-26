import styled from "styled-components";

interface WrapperIcon{
  rotateMiddle?: boolean;
  transform?: string;
}
interface WrapperButton{
  fourPlayers?: boolean;
}
export const WrapperButtons = styled.div`
  display: flex;
`
export const WrapperSetPosition = styled.div`
  width: 85vw;
  height: 90vh;
  position: relative;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const RotateIcons = styled.div`
  transform: rotate(90deg);
  height: 95%;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
export const WrapperButton = styled.div<WrapperButton>`
  margin: 10vw;
  width: 120px;
  height: 233px;
`
export const WrapperIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 95%;
`
export const WrapperIcon = styled.div<WrapperIcon>`
  background-color: ${({theme})=>theme.darkPurple};
  width: ${({rotateMiddle})=> rotateMiddle? '100%' : '100%'};
  height: ${({rotateMiddle})=> rotateMiddle? '45%' : '45%'};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({transform})=> transform};
`

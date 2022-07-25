import styled from "styled-components";

interface WrapperIcon{
  fourPlayers?: boolean;
  transform?: string;
}
interface WrapperButton{
  fourPlayers?: boolean;
}
export const WrapperButtons = styled.div`
  display: flex;
  width: 150px;
  height: 240px;
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
export const WrapperFourPlayer = styled.div`
  transform: rotate(90deg);
  height: 100%;
  width: 100%;
`
export const WrapperButton = styled.div<WrapperButton>`
  width: ${({fourPlayers})=> fourPlayers?  '100%' : '25vw'};
  height: ${({fourPlayers})=> fourPlayers? '100%' : '100%'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin:10px;
`
export const WrapperIcon = styled.div<WrapperIcon>`
  width: ${({fourPlayers})=>fourPlayers? '100%' : '25vw'};
  height: ${({fourPlayers})=>fourPlayers? '50px' : '25vw'};
  margin: 5px 0;
  border-radius: 15px;
  background-color: ${({theme})=> theme.darkPurple};
  transform: ${({transform})=>transform};
  display: flex;
  justify-content: center;
  align-items: center;
`

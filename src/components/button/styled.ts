import styled from "styled-components";

interface WrapperButton {
  width: string;
  height: string;
  border: boolean;
  background: string;
  fullRadius: boolean;
}

export const WrapperButton = styled.button<WrapperButton>`
border-color: #62E093;
border-weight: 4px;
border-style: ${({border})=> border ? 'solid' : 'none'};
border-radius: ${({fullRadius})=> fullRadius ? '100%' : '15px'};
font-size: 40px;
color: #62E093;
background-color: ${({background})=> background};
height: ${({height})=> height};
width: ${({width})=> width};
`
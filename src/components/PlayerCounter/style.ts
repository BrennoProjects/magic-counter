import styled from "styled-components";

interface TextHud{
  fontSize: string,
}
export const WrapperPlayer = styled.div`
  width: 95%;
  height: 48%;
  display: flex;
  
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  
  background-color: ${({theme})=>theme.purple};
  border-radius: 10px;

`
export const WrapperText = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TextHud = styled.span<TextHud>`
margin: 0;

font-family: ${({theme})=>theme.font};
font-size: ${({fontSize})=> fontSize};
color: ${({theme})=>theme.title};
font-weight: 600;
`
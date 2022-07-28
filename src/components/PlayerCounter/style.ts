import styled from "styled-components";

export const WrapperPlayer = styled.div`
  width: 95vw;
  height: 95vh;
  position: relative;
  background-color: ${({theme})=> theme.purple};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
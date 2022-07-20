import styled from "styled-components";


export const WrapperHome = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutUs = styled.p`
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: bolder;
  color: ${({theme})=> theme.title};
  background-color: transparent;
`;

export const BoxTextButton = styled.div`
  width: 250px;
`;

export const BoxAboutUs = styled.div`
  width: auto;
  position: absolute;
  bottom: 30px;
`;

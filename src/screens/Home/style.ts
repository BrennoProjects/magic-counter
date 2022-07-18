import styled from "styled-components";
import palette from "../../palette";

export const HomeDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  margin: 40px 0 20px 0;
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  font-weight: bolder;
  color: ${palette.white};
  background-color: transparent;
`;
export const TextButton = styled.p`
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  font-weight: bolder;
  color: ${palette.green};
  background-color: transparent;
`;

export const AboutUs = styled.p`
  margin: 70px 0 0 0;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: bolder;
  color: ${palette.white};
  background-color: transparent;
`;

export const BoxTextButton = styled.div`
  width: 250px;
`;

export const BoxAboutUs = styled.div`
  width: 250px;
  position: absolute;
  bottom: 30px;
`;
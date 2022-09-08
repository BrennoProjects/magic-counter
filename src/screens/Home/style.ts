import styled from 'styled-components';

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
  font-family:${({ theme }) => theme.font};
  font-size: 24px;
  font-weight: bolder;
  color: ${({ theme }) => theme.title};
  background-color: transparent;
`;

export const WrapperTextButton = styled.div`
  width: 250px;
  margin: 10vh 0 20vh;
`;

export const WrapperAboutUs = styled.div`
  width: auto;
  position: absolute;
  bottom: 30px;
`;

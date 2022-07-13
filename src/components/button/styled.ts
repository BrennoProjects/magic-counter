import styled from "styled-components";

interface WrapperButton {
  width: string;
  height: string;
  border: boolean;
  background: string;
  fullRadius: boolean;
  right: string;
  positionAbsolute: boolean;
}

export const WrapperButton = styled.button<WrapperButton>`
  border-color: #62e093;
  border-width: 4px;
  border-style: ${({ border }) => (border ? "solid" : "none")};
  border-radius: ${({ fullRadius }) => (fullRadius ? "100%" : "15px")};
  color: #62e093;
  background-color: ${({ background }) => background};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  right: ${({right})=> right};
  position: ${({positionAbsolute})=> positionAbsolute ? "absolute" : "unset"};
`;

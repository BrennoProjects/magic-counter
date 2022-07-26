import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useCallback } from "react";

import * as S from "./style";
import BackArrow from "../../assets/BackArrow";
import Button from "../../components/button";
import Text from "../../components/Text";
import Title from "../../components/Title";
import NavBar from "../../components/NavBar";
import { GameSetupContext } from "../../context/GameSetupContext";

const SetupLifePage:FC = () => {
  
  const navigate = useNavigate();
  const {setInitialLife} = useContext(GameSetupContext)

  const handleValueLife = useCallback((value: number):void => {
    setInitialLife(value);
    navigate("/set-players")
  },[])

  return (
    <S.WrapperSetupLifePage>
      <NavBar>
        <Button
          width={"30px"}
          height={"30px"}
          border={false}
          onClick={() => navigate(-1)}
        >
          <BackArrow />
        </Button>
      </NavBar>
      <Title>Initial Life</Title>
      <S.WrapperButtons>
        <Button
          onClick={() =>  handleValueLife(60)}
          width="9.375rem"
        >
          <Text>60</Text>
        </Button>
        <Button
          onClick={() =>  handleValueLife(40)}
          width="9.375rem"
        >
          <Text>40</Text>
        </Button>
      </S.WrapperButtons>
      <S.WrapperButtons>
        <Button
         onClick={() =>  handleValueLife(30)}
          width="9.375rem"
        >
          <Text>30</Text>
        </Button>
        <Button
          onClick={() =>  handleValueLife(20)}
          width="9.375rem"
        >
          <Text>20</Text>
        </Button>
      </S.WrapperButtons>
      <S.WrapperButtons>
        <Button onClick={() => navigate("/set-players")}>
          <Text>custom</Text>
        </Button>
      </S.WrapperButtons>
    </S.WrapperSetupLifePage>
  );
};

export default SetupLifePage;

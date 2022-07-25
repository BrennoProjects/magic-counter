import { useNavigate } from "react-router-dom";
import{ FC, useContext } from "react";

import * as S from "./style";
import BackArrow from "../../assets/BackArrow";
import Button from "../../components/button";
import Text from "../../components/Text";
import Title from "../../components/Title";
import NavBar from "../../components/NavBar";
import { LifeContext } from "../../context/LifeProvider";

const SetLifePage:FC = () => {
  const initialLife = useContext(LifeContext) 
  let {setInitialLife} = initialLife
  const navigate = useNavigate();
  const SetAndNavigate = (value: number, path: string) => {
    setInitialLife(value);
    navigate(path)
  };
  return (
    <S.WrapperSetLifePage>
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
          onClick={() =>  SetAndNavigate(60, "/set-players")}
          width="9.375rem"
        >
          <Text>60</Text>
        </Button>
        <Button
          onClick={() =>  SetAndNavigate(40, "/set-players")}
          width="9.375rem"
        >
          <Text>40</Text>
        </Button>
      </S.WrapperButtons>
      <S.WrapperButtons>
        <Button
         onClick={() =>  SetAndNavigate(30, "/set-players")}
          width="9.375rem"
        >
          <Text>30</Text>
        </Button>
        <Button
          onClick={() =>  SetAndNavigate(20, "/set-players")}
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
    </S.WrapperSetLifePage>
  );
};

export default SetLifePage;

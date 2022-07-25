import { useNavigate } from "react-router-dom";
import type{ FC } from "react";

import * as S from "./style";
import BackArrow from "../../assets/BackArrow";
import Button from "../../components/button";
import Text from "../../components/Text";
import Title from "../../components/Title";
import NavBar from "../../components/NavBar";

const SetPlayer:FC = () => {
  const navigate = useNavigate();
  return (
    <S.WrapperSetPlayer>
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
      <Title>Number of players</Title>
      <S.WrapperButtons>
        <Button
          onClick={() =>  console.log('player', 1)}
          width="9.375rem"
        >
          <Text>1</Text>
        </Button>
        <Button
          onClick={() =>  console.log('player', 2)}
          width="9.375rem"
        >
          <Text>2</Text>
        </Button>
      </S.WrapperButtons>
      <S.WrapperButtons>
        <Button
         onClick={() =>  console.log('player', 3)}
          width="9.375rem"
        >
          <Text>3</Text>
        </Button>
        <Button
          onClick={() =>  console.log('player', 4)}
          width="9.375rem"
        >
          <Text>4</Text>
        </Button>
      </S.WrapperButtons>
    </S.WrapperSetPlayer>
  );
};

export default SetPlayer;
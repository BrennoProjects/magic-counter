import type { FC } from "react";
import { useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./style";
import BackArrow from "../../assets/BackArrow";
import Button from "../../components/button";
import Text from "../../components/Text";
import Title from "../../components/Title";
import NavBar from "../../components/NavBar";
import { GameSetupContext } from "../../context/GameSetupContext";

const SetupPlayer: FC = () => {

  const navigate = useNavigate();
  const { setNumberPlayers } = useContext(GameSetupContext);

  const handleSetPlayer = useCallback((value: number):void => {
      if(value === 1 || value === 3){
        setNumberPlayers(value)
        navigate("/game")
      }
      else if(value === 2 || value === 4){
        setNumberPlayers(value)
        navigate("/set-position")
      }
    }
  ,[])

  return (
    <S.WrapperSetupPlayer>
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
          onClick={() => handleSetPlayer(1 )}
          width="9.375rem"
        >
          <Text>1</Text>
        </Button>
        <Button
          onClick={() => handleSetPlayer(2)}
          width="9.375rem"
        >
          <Text>2</Text>
        </Button>
      </S.WrapperButtons>
      <S.WrapperButtons>
        <Button onClick={() => handleSetPlayer(3)} width="9.375rem">
          <Text>3</Text>
        </Button>
        <Button onClick={() => handleSetPlayer(4)} width="9.375rem">
          <Text>4</Text>
        </Button>
      </S.WrapperButtons>
    </S.WrapperSetupPlayer>
  );
};
export default SetupPlayer;

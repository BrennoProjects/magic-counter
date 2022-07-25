import type { FC } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./style";
import BackArrow from "../../assets/BackArrow";
import Button from "../../components/button";
import Text from "../../components/Text";
import Title from "../../components/Title";
import NavBar from "../../components/NavBar";
import { PlayersNumberContext } from "../../context/PlayersNumberProvider";

const SetPlayer: FC = () => {
  
  const navigate = useNavigate();
  const playerNumber = useContext(PlayersNumberContext);
  const { setPlayersNumber } = playerNumber;
  
  const SetAndNavigate = (value: number, path: string) => {
    setPlayersNumber(value);
    navigate(path)
  };

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
          onClick={() => SetAndNavigate(1, "/set-position")}
          width="9.375rem"
        >
          <Text>1</Text>
        </Button>
        <Button
          onClick={() => SetAndNavigate(2, "/set-position")}
          width="9.375rem"
        >
          <Text>2</Text>
        </Button>
      </S.WrapperButtons>
      <S.WrapperButtons>
        <Button onClick={() => SetAndNavigate(3, "/set-position")} width="9.375rem">
          <Text>3</Text>
        </Button>
        <Button onClick={() => SetAndNavigate(4, "/set-position")} width="9.375rem">
          <Text>4</Text>
        </Button>
      </S.WrapperButtons>
    </S.WrapperSetPlayer>
  );
};
export default SetPlayer;

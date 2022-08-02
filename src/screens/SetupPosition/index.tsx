import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { FC } from "react";

import * as S from "./style";
import BackArrow from "../../assets/BackArrow";
import Button from "../../components/button";
import Text from "../../components/Text";
import Title from "../../components/Title";
import NavBar from "../../components/NavBar";
import PlayerIcon from "../../assets/PlayerIcon";
import { GameSetupContext, ValuesPosition } from "../../context/GameSetupContext";


const SetupPosition: FC = () => {

  const navigate = useNavigate();
  const { numberPlayers, setPositionPlayers } = useContext(GameSetupContext)
  const handleSetPosition = useCallback((value: ValuesPosition): void => {
    setPositionPlayers(value)
    navigate("/game")
  }
    , [])


  const tableForTwo = useCallback((): JSX.Element => (
    <S.WrapperButtons>
      <S.WrapperButton>
        <Button
          onClick={() => handleSetPosition(ValuesPosition.twoPlayers)}
          width="100%"
          height="100%"
        >
          <S.WrapperIcons>
            <S.WrapperIcon transform="rotate(180deg)">
              <PlayerIcon />
            </S.WrapperIcon>
            <S.WrapperIcon>
              <PlayerIcon />
            </S.WrapperIcon>
          </S.WrapperIcons>
        </Button>
      </S.WrapperButton>
      <S.WrapperButton>
        <Button
          onClick={() => handleSetPosition(ValuesPosition.twoPlayersLateral)}
          width="100%"
          height="100%"
        >
          <S.WrapperIcons>
            <S.WrapperIcon transform="rotate(90deg)">
              <PlayerIcon />
            </S.WrapperIcon>
            <S.WrapperIcon transform="rotate(-90deg)">
              <PlayerIcon />
            </S.WrapperIcon>
          </S.WrapperIcons>
        </Button>
      </S.WrapperButton>
    </S.WrapperButtons>
  ), [])

  const tableForFour = useCallback((): JSX.Element => (
    <S.WrapperButtons>
      <S.WrapperButton>
        <Button
          onClick={() => handleSetPosition(ValuesPosition.fourPlayers)}
          width="100%"
          height="100%"
        >
          <S.WrapperIcons>
            <S.RotateIcons>
              <S.WrapperIcon transform="rotate(180deg)" rotateMiddle={true}>
                <PlayerIcon />
              </S.WrapperIcon>
              <S.WrapperIcon rotateMiddle={true}>
                <PlayerIcon />
              </S.WrapperIcon>
            </S.RotateIcons>
            <S.RotateIcons>
              <S.WrapperIcon transform="rotate(180deg)" rotateMiddle={true}>
                <PlayerIcon />
              </S.WrapperIcon>
              <S.WrapperIcon rotateMiddle={true}>
                <PlayerIcon />
              </S.WrapperIcon>
            </S.RotateIcons>
          </S.WrapperIcons>
        </Button>
      </S.WrapperButton>
      <S.WrapperButton>
        <Button
          onClick={() => handleSetPosition(ValuesPosition.fourPlayersLateral)}
          width="100%"
          height="100%"
        >
          <S.WrapperIcons>
            <S.WrapperIcon transform="rotate(180deg)">
              <PlayerIcon />
            </S.WrapperIcon>
            <S.RotateIcons>
              <S.WrapperIcon transform="rotate(180deg)" rotateMiddle={true}>
                <PlayerIcon />
              </S.WrapperIcon>
              <S.WrapperIcon rotateMiddle={true}>
                <PlayerIcon />
              </S.WrapperIcon>
            </S.RotateIcons>
            <S.WrapperIcon>
              <PlayerIcon />
            </S.WrapperIcon>
          </S.WrapperIcons>
        </Button>
      </S.WrapperButton>
    </S.WrapperButtons>
  ), [])

  return (
    <S.WrapperSetupPosition>
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
      <Title>Players Position</Title>
      {numberPlayers === 4 ? tableForFour() : tableForTwo()}
    </S.WrapperSetupPosition>
  );
};
export default SetupPosition;

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
import { GameSetupContext, valuesPosition } from "../../context/GameSetupContext";


const SetupPosition: FC = () => {

  const navigate = useNavigate();
  const { numberPlayers, setPositionPlayers } = useContext(GameSetupContext)
  const handleSetPosition = useCallback((value: number): void => {
    switch (value) {
      case valuesPosition.twoPlayers:
        setPositionPlayers(valuesPosition.twoPlayers)
        navigate("/game")
        break;
      case valuesPosition.twoPlayersLateral:
        setPositionPlayers(valuesPosition.twoPlayersLateral)
        navigate("/game")
        break;
      case valuesPosition.fourPlayers:
        setPositionPlayers(valuesPosition.fourPlayers)
        navigate("/game")
        break;
      case valuesPosition.fourPlayersLateral:
        setPositionPlayers(valuesPosition.fourPlayersLateral)
        navigate("/game")
        break;
      default:
        break;
    }
  }
    , [])


  const tableForTwo = useCallback((): JSX.Element => (
    <S.WrapperButtons>
      <S.WrapperButton>
        <Button
          onClick={() => handleSetPosition(valuesPosition.twoPlayers)}
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
          onClick={() => handleSetPosition(valuesPosition.twoPlayersLateral)}
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
          onClick={() => handleSetPosition(valuesPosition.fourPlayers)}
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
          onClick={() => handleSetPosition(valuesPosition.fourPlayersLateral)}
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

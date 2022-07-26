import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import * as S from "./style";
import BackArrow from "../../assets/BackArrow";
import Button from "../../components/button";
import Text from "../../components/Text";
import Title from "../../components/Title";
import NavBar from "../../components/NavBar";
import PlayerIcon from "../../assets/PlayerIcon";

const PlayersOption = (props: number) => {
  const navigate = useNavigate();
  if (props === 1) {
    navigate("/game");
  }
  else if (props === 2) {
    return (
      <S.WrapperButtons>
        <S.WrapperButton>
          <Button
            onClick={() => console.log("teste")}
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
            onClick={() => console.log("teste")}
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
    );
  }
  else if (props === 3) {
    navigate("/game");
  }
  else if (props === 4) {
    return (
      <S.WrapperButtons>
        <S.WrapperButton>
          <Button
            onClick={() => console.log("teste")}
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
        <S.WrapperButton>
          <Button
            onClick={() => console.log("teste")}
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
      </S.WrapperButtons>
    );
  }
};

const SetPosition: FC = () => {
  let [playersNumber, setPlayersNumber] = useState(4);
  const navigate = useNavigate();

  return (
    <S.WrapperSetPosition>
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
      {PlayersOption(playersNumber)}
    </S.WrapperSetPosition>
  );
};
export default SetPosition;

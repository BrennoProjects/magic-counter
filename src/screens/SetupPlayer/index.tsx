import { useContext, useCallback } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './style';
import BackArrow from '../../assets/BackArrow';
import Button from '../../components/button';
import Text from '../../components/Text';
import Title from '../../components/Title';
import NavBar from '../../components/NavBar';
import { GameSetupContext } from '../../context/GameSetupContext';

const SetupPlayer: FC = () => {
  const navigate = useNavigate();
  const { setNumberPlayers, initialLife, handleSetPlayers } = useContext(GameSetupContext);

  const handleSetPlayer = useCallback((value: number): void => {
    setNumberPlayers(value);
    handleSetPlayers(value, initialLife);
    if (value === 1 || value === 3) {
      navigate('/game');
      return;
    }
    if (value === 2 || value === 4) {
      navigate('/setup-position');
    }
  }, []);

  return (
    <S.WrapperSetupPlayer>
      <NavBar>
        <Button
          width="30px"
          height="30px"
          border={false}
          onClick={() => navigate(-1)}
        >
          <BackArrow />
        </Button>
      </NavBar>
      <Title>Number of players</Title>
      <S.WrapperButtons>
        <Button
          onClick={() => handleSetPlayer(1)}
          width="100%" margin="0px 10px 0px 0px"
        >
          <Text>1</Text>
        </Button>
        <Button
          onClick={() => handleSetPlayer(2)}
          width="100%" margin="0px 0px 0px 10px"
        >
          <Text>2</Text>
        </Button>
      </S.WrapperButtons>
      <S.WrapperButtons>
        <Button onClick={() => handleSetPlayer(3)} width="100%" margin="0px 10px 0px 0px">
          <Text>3</Text>
        </Button>
        <Button onClick={() => handleSetPlayer(4)} width="100%" margin="0px 0px 0px 10px">
          <Text>4</Text>
        </Button>
      </S.WrapperButtons>
    </S.WrapperSetupPlayer>
  );
};
export default SetupPlayer;

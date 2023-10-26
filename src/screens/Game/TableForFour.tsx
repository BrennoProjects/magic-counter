import { useContext, useState } from 'react';
import { GameSetupContext } from '../../context/GameSetupContext';
import PlayerCounter from '../../components/PlayerCounter';
import * as S from './style';
import Menu from './Menu';

const TableForFour = (): JSX.Element => {
  const { players } = useContext(GameSetupContext);
  const [showMenu, setShowMenu] = useState<boolean>(true);

  return (
    <>
    <Menu show={showMenu} buttonPosition='middle'/>
        <S.Rotate isFourTop={true} >
          <PlayerCounter
            rotate="rotate(180deg)"
            life={players[0].life}
            id="ID_PLAYER_1"
            width="48vh"
            height="49vw"
            margin='0.5vw'
            setShowMenu={(value: boolean) => setShowMenu(value)}

          />
          <PlayerCounter
            life={players[1].life}
            id="ID_PLAYER_2"
            width="48vh"
            height="49vw"
            margin='0.5vw'
            setShowMenu={(value: boolean) => setShowMenu(value)}

          />
        </S.Rotate>
        <S.Rotate isFourBottom={true}>
          <PlayerCounter
            rotate="rotate(180deg)"
            life={players[2].life}
            id="ID_PLAYER_3"
            width="48vh"
            height="49vw"
            margin='0.5vw'
            setShowMenu={(value: boolean) => setShowMenu(value)}

          />
          <PlayerCounter
            life={players[3].life}
            id="ID_PLAYER_4"
            width="48vh"
            height="49vw"
            margin='0.5vw'
            setShowMenu={(value: boolean) => setShowMenu(value)}

          />
        </S.Rotate>
    </>
  );
};

export default TableForFour;

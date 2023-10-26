import { useContext, useState } from 'react';
import { GameSetupContext } from '../../context/GameSetupContext';
import PlayerCounter from '../../components/PlayerCounter';
import * as S from './style';
import Menu from './Menu';

const TableForThree = (): JSX.Element => {
  const { players } = useContext(GameSetupContext);
  const [showMenu, setShowMenu] = useState<boolean>(true);

  return (
    <>
    <Menu show={showMenu} buttonPosition='middle'/>
      <PlayerCounter
        rotate="rotate(180deg)"
        life={players[0].life}
        id="ID_PLAYER_1"
        width="100vw"
        height="47vh"
        marginBottom='10px'
        setShowMenu={(value: boolean) => setShowMenu(value)}
      />
      <S.Rotate>
        <PlayerCounter
          rotate="rotate(180deg)"
          life={players[1].life}
          id="ID_PLAYER_2"
          width="100%"
          height="48vw"
          setShowMenu={(value: boolean) => setShowMenu(value)}
        />
        <PlayerCounter
          life={players[2].life}
          id="ID_PLAYER_3"
          width="100%"
          height="48vw"
          setShowMenu={(value: boolean) => setShowMenu(value)}
        />
      </S.Rotate>
    </>
  );
};

export default TableForThree;

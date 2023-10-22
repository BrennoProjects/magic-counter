import { useContext, useState } from 'react';
import { GameSetupContext } from '../../context/GameSetupContext';
import PlayerCounter from '../../components/PlayerCounter';
import Menu from './Menu';

const TableForTwoLateral = (): JSX.Element => {
  const { players } = useContext(GameSetupContext);
  const [showMenu, setShowMenu] = useState<boolean>(true);

  return (
    <>
    <Menu show={showMenu} buttonPosition='middle'/>

      <PlayerCounter
        rotate="rotate(-90deg)"
        life={players[0].life}
        id="ID_PLAYER_1"
        width="49.5vh"
        height="98vw"
        maxHeight="390px"
        maxWidth="390px"
        setShowMenu={(value: boolean) => setShowMenu(value)}
      />
      <br />
      <PlayerCounter
        rotate="rotate(90deg)"
        life={players[1].life}
        id="ID_PLAYER_2"
        width="49.5vh"
        height="98vw"
        maxHeight="390px"
        maxWidth="390px"
        setShowMenu={(value: boolean) => setShowMenu(value)}
      />
    </>
  );
};

export default TableForTwoLateral;

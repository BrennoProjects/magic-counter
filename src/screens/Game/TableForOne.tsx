import { useContext, useState } from 'react';
import { GameSetupContext } from '../../context/GameSetupContext';
import PlayerCounter from '../../components/PlayerCounter';
import Menu from './Menu';

const TableForOne = (): JSX.Element => {
  const { players } = useContext(GameSetupContext);
  const [showMenu, setShowMenu] = useState<boolean>(true);

  return (
    <>
      <Menu show={showMenu} buttonPosition='top'/>
      <PlayerCounter
        life={players[0].life}
        id="ID_PLAYER_1"
        width="100vw"
        height="98vh"
        maxWidth="400px"
        maxHeight="800px"
        setShowMenu={(value: boolean) => setShowMenu(value)}
      />
    </>
  );
};

export default TableForOne;

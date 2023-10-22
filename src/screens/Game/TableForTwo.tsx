import { useContext, useState } from 'react';
import { GameSetupContext } from '../../context/GameSetupContext';
import PlayerCounter from '../../components/PlayerCounter';
import Menu from './Menu';

const TableForTwo = (): JSX.Element => {
  const { players } = useContext(GameSetupContext);
  const [showMenu, setShowMenu] = useState<boolean>(true);

  return (
    <>
      <Menu show={showMenu} buttonPosition='middle'/>
      <PlayerCounter
        rotate='rotate(180deg)'
        life={players[0].life}
        id='ID_PLAYER_1'
        width='100vw'
        height='46vh'
        maxWidth='400px'
        setShowMenu={(value: boolean) => setShowMenu(value)}

      />
      <PlayerCounter
        life={players[1].life}
        id='ID_PLAYER_2'
        width='100vw'
        height='46vh'
        marginTop='15px'
        maxWidth='400px'
        setShowMenu={(value: boolean) => setShowMenu(value)}

      />
    </>
  );
};

export default TableForTwo;

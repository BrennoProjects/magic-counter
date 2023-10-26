import { useContext, useState } from 'react';
import { GameSetupContext } from '../../context/GameSetupContext';
import PlayerCounter from '../../components/PlayerCounter';
import * as S from './style';
import Menu from './Menu';

const TableForFourLateral = (): JSX.Element => {
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
        height="25vh"
        position="fixed"
            setShowMenu={(value: boolean) => setShowMenu(value)}

      />
      <div
        style={{
          width: '96%',
          height: '48vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center'
        }}
      >
        <S.Rotate isFourLateral>
          <PlayerCounter
            rotate="rotate(180deg)"
            life={players[1].life}
            id="ID_PLAYER_2"
            width="44vh"
            height="48vw"
            marginBottom="4px"
            setShowMenu={(value: boolean) => setShowMenu(value)}

          />
          <PlayerCounter
            life={players[2].life}
            id="ID_PLAYER_3"
            width="44vh"
            height="48vw"
            marginTop="4px"
            setShowMenu={(value: boolean) => setShowMenu(value)}

          />
        </S.Rotate>
      </div>
      <PlayerCounter
        life={players[3].life}
        id="ID_PLAYER_4"
        width="100vw"
        height="25vh"
        position="fixed"
        setShowMenu={(value: boolean) => setShowMenu(value)}
      />
    </>
  );
};

export default TableForFourLateral;

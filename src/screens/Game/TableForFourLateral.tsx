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
        height="28vh"
        maxHeight="260px"
        maxWidth="399px"
        position="fixed"
            setShowMenu={(value: boolean) => setShowMenu(value)}

      />
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          height: '48vh',
          maxHeight: '266px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignContent: 'center'
        }}
      >
        <S.Rotate isFourLateral>
          <PlayerCounter
            rotate="rotate(180deg)"
            life={players[1].life}
            id="ID_PLAYER_2"
            width="50vh"
            height="48vw"
            maxWidth="270px"
            maxHeight="190px"
            marginBottom="4px"
            setShowMenu={(value: boolean) => setShowMenu(value)}

          />
          <PlayerCounter
            life={players[2].life}
            id="ID_PLAYER_3"
            width="50vh"
            height="48vw"
            maxWidth="270px"
            maxHeight="190px"
            marginTop="4px"
            setShowMenu={(value: boolean) => setShowMenu(value)}

          />
        </S.Rotate>
      </div>
      <PlayerCounter
        life={players[3].life}
        id="ID_PLAYER_4"
        width="100vw"
        height="28vh"
        maxHeight="260px"
        maxWidth="399px"
        position="fixed"
            setShowMenu={(value: boolean) => setShowMenu(value)}

      />
    </>
  );
};

export default TableForFourLateral;

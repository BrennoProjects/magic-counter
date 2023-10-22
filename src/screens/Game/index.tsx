import { useContext } from 'react';
import type { FC } from 'react';

import * as S from './style';
import { GameSetupContext, ValuesPosition } from '../../context/GameSetupContext';
import TableForOne from './TableForOne';
import TableForThree from './TableForThree';
import TableForTwo from './TableForTwo';
import TableForTwoLateral from './TableForTwoLateral';
import TableForFour from './TableForFour';
import TableForFourLateral from './TableForFourLateral';
import { GameMenuContext } from '../../context/GameMenuScreen';

const Game: FC = () => {
  const { numberPlayers, positionPlayers } = useContext(GameSetupContext);
  const { showMenuScreen } = useContext(GameMenuContext);
  // const tableForOne = useCallback(() => (
  //   <>
  //     <PlayerCounter life={players[0].life} id={'ID_PLAYER_1'} width={'100vw'} height={'98vh'} />
  //   </>
  // ), []);

  // const tableForTwo = useCallback(() => (
  //   <>
  //     <PlayerCounter rotate="rotate(180deg)" life={players[0].life} id={'ID_PLAYER_1'} width={'100vw'} height={'46vh'} marginTop='15px'/>
  //     <PlayerCounter life={players[1].life} id={'ID_PLAYER_2'} width={'100vw'} height={'46vh'} marginTop='15px'/>
  //   </>
  // ), []);
  // const tableForTwoLateral = useCallback(() => (
  //   <>
  //     <PlayerCounter rotate="rotate(-90deg)" life={players[0].life} id={'ID_PLAYER_1'} width={'49.5vh'} height={'98vw'} maxHeight='380px' maxWidth='380px'/>
  //     <br/>
  //     <PlayerCounter rotate="rotate(90deg)" life={players[1].life} id={'ID_PLAYER_2'} width={'49.5vh'} height={'98vw'} maxHeight='380px' maxWidth='380px'/>
  //   </>
  // ), []);
  // const tableForThree = useCallback(() => (
  //   <>
  //     <PlayerCounter rotate="rotate(180deg)" life={players[0].life} id={'ID_PLAYER_1'} width={'100vw'} height={'50vw'} maxHeight='307px' maxWidth='400px' marginBottom='33px'/>
  //     <S.Rotate marginBottom="4vh">
  //       <PlayerCounter rotate="rotate(180deg)" life={players[1].life} id={'ID_PLAYER_2'} width={'100vw'} height={'48vw'} maxWidth='450px' maxHeight='195px'/>
  //       <PlayerCounter life={players[2].life} id={'ID_PLAYER_3'} width={'100vw'} height={'48vw'} maxWidth='450px' maxHeight='195px'/>
  //     </S.Rotate>
  //   </>
  // ), []);
  // const tableForFour = useCallback(() => (
  //   <>
  //   <div style={{ width: '100vw', maxWidth: '400px', height: '48vh', maxHeight: '800px', display: 'flex', justifyContent: 'start', flexDirection: 'column', alignContent: 'center' }}>
  //     <S.Rotate>
  //       <PlayerCounter rotate="rotate(180deg)" life={players[0].life} id={'ID_PLAYER_1'} width={'47vh'} height={'49vw'} maxWidth='395px' maxHeight='185px' marginTop='10px'/>
  //       <PlayerCounter life={players[1].life} id={'ID_PLAYER_2'} width={'47vh'} height={'48vw'} maxWidth='395px' maxHeight='190px' marginBottom='10px'/>
  //     </S.Rotate>
  //   </div>
  //   <div style={{ width: '100vw', maxWidth: '400px', height: '48vh', maxHeight: '800px', display: 'flex', justifyContent: 'end', flexDirection: 'column', alignContent: 'center' }}>
  //     <S.Rotate>
  //       <PlayerCounter rotate="rotate(180deg)" life={players[2].life} id={'ID_PLAYER_3'} width={'47vh'} height={'49vw'} maxWidth='395px' maxHeight='185px' marginTop='10px'/>
  //       <PlayerCounter life={players[3].life} id={'ID_PLAYER_4'} width={'47vh'} height={'48vw'} maxWidth='395px' maxHeight='190px' marginBottom='10px'/>
  //     </S.Rotate>
  //   </div>
  //   </>
  // ), []);
  // const tableForFourLateral = useCallback(() => (
  //   <>
  //     <PlayerCounter rotate="rotate(180deg)" life={players[0].life} id={'ID_PLAYER_1'} width={'100vw'} height={'28vh'} maxHeight='260px' maxWidth='399px' position='fixed'/>
  //     <div style={{ width: '100%', maxWidth: '400px', height: '48vh', maxHeight: '266px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'center' }}>
  //     <S.Rotate isFourLateral>
  //       <PlayerCounter rotate="rotate(180deg)" life={players[1].life} id={'ID_PLAYER_2'} width={'50vh'} height={'48vw'} maxWidth='270px' maxHeight='190px' marginBottom='4px'/>
  //       <PlayerCounter life={players[2].life} id={'ID_PLAYER_3'} width={'50vh'} height={'48vw'} maxWidth='270px' maxHeight='190px' marginTop='4px'/>
  //     </S.Rotate>
  //     </div>
  //     <PlayerCounter life={players[3].life} id={'ID_PLAYER_4'} width={'100vw'} height={'28vh'} maxHeight='260px' maxWidth='399px' position='fixed'/>
  //   </>
  // ), []);
  const tableGame = (number: number, position: ValuesPosition): JSX.Element | undefined => {
    if (number === 1) return <TableForOne/>;
    if (number === 3) return <TableForThree/>;
    if (position !== ValuesPosition.unset) {
      if (number === 2 && position === ValuesPosition.TwoPlayers) return <TableForTwo/>;
      if (number === 2 && position === ValuesPosition.TwoPlayersLateral) return <TableForTwoLateral/>;
      if (number === 4 && position === ValuesPosition.FourPlayers) return <TableForFour/>;
      if (number === 4 && position === ValuesPosition.FourPlayersLateral) return <TableForFourLateral/>;
    }
  };
  return (
    <S.Game>
      {showMenuScreen && (<div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }}> teste </div>)}
      {tableGame(numberPlayers, positionPlayers)}
    </S.Game>
  );
};

export default Game;

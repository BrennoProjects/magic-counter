import { useCallback, useContext } from 'react';
import type { FC } from 'react';

import * as S from './style';
import PlayerCounter from '../../components/PlayerCounter';
import { GameSetupContext, ValuesPosition } from '../../context/GameSetupContext';

const Game: FC = () => {
  const { numberPlayers, positionPlayers, players } = useContext(GameSetupContext);
  const tableForOne = useCallback(() => (
    <>
      <PlayerCounter life={players[0].life} id={'ID_PLAYER_1'} width={'98%'} height={'98%'} />
    </>
  ), []);

  const tableForTwo = useCallback(() => (
    <>
      <PlayerCounter rotate="rotate(180deg)" life={players[0].life} id={'ID_PLAYER_1'} width={'98%'} height={'49.5%'} />
      <PlayerCounter life={players[1].life} id={'ID_PLAYER_2'} width={'98%'} height={'49.5%'} />
    </>
  ), []);
  const tableForTwoLateral = useCallback(() => (
    <>
      <PlayerCounter rotate="rotate(-90deg)" life={players[0].life} id={'ID_PLAYER_1'} width={'49.5vh'} height={'98vw'} />
      <PlayerCounter rotate="rotate(90deg)" life={players[1].life} id={'ID_PLAYER_2'} width={'49.5vh'} height={'98vw'} />
    </>
  ), []);
  const tableForThree = useCallback(() => (
    <>
      <PlayerCounter rotate="rotate(180deg)" life={players[0].life} id={'ID_PLAYER_1'} width={'98vw'} height={'39.5vh'} marginBottom={'5vh'} />
      <S.Rotate MarginBottom="6.5vh">
        <PlayerCounter rotate="rotate(180deg)" life={players[1].life} id={'ID_PLAYER_2'} width={'58.5vh'} height={'48vw'} />
        <PlayerCounter life={players[2].life} id={'ID_PLAYER_3'} width={'58.5vh'} height={'48vw'} />
      </S.Rotate>
    </>
  ), []);
  const tableForFour = useCallback(() => (
    <>
      <S.Rotate>
        <PlayerCounter rotate="rotate(180deg)" life={players[0].life} id={'ID_PLAYER_1'} width={'49.5vh'} height={'48vw'}/>
        <PlayerCounter life={players[1].life} id={'ID_PLAYER_2'} width={'49.5vh'} height={'48vw'}/>
      </S.Rotate>
      <S.Rotate>
        <PlayerCounter rotate="rotate(180deg)" life={players[2].life} id={'ID_PLAYER_3'} width={'49.5vh'} height={'48vw'}/>
        <PlayerCounter life={players[3].life} id={'ID_PLAYER_4'} width={'49.5vh'} height={'48vw'}/>
      </S.Rotate>
    </>
  ), []);
  const tableForFourLateral = useCallback(() => (
    <>
      <PlayerCounter rotate="rotate(180deg)" life={players[0].life} id={'ID_PLAYER_1'} width={'98vw'} height={'28.7vh'} marginBottom={'69.5vh'} position={'fixed'}/>
      <S.Rotate>
        <PlayerCounter rotate="rotate(180deg)" life={players[1].life} id={'ID_PLAYER_2'} width={'40vh'} height={'48vw'}/>
        <PlayerCounter life={players[2].life} id={'ID_PLAYER_3'} width={'40vh'} height={'48vw'}/>
      </S.Rotate>
      <PlayerCounter life={players[3].life} id={'ID_PLAYER_4'} width={'98vw'} height={'28.7vh'} marginBottom={'-69.5vh'} position={'fixed'}/>
    </>
  ), []);

  const tableGame = (number: number, position: ValuesPosition): JSX.Element | undefined => {
    if (number === 1) return tableForOne();
    if (number === 3) return tableForThree();
    if (position !== ValuesPosition.unset) {
      if (number === 2 && position === ValuesPosition.TwoPlayers) return tableForTwo();
      if (number === 2 && position === ValuesPosition.TwoPlayersLateral) return tableForTwoLateral();
      if (number === 4 && position === ValuesPosition.FourPlayers) return tableForFour();
      if (number === 4 && position === ValuesPosition.FourPlayersLateral) return tableForFourLateral();
    }
  };
  return (
    <S.Game>
      {tableGame(numberPlayers, positionPlayers)}
    </S.Game>
  );
};

export default Game;

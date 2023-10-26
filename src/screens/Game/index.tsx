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
import MenuScreen from '../MenuScreen';

const Game: FC = () => {
  const { showMenuScreen } = useContext(GameMenuContext);
  const { numberPlayers, positionPlayers } = useContext(GameSetupContext);

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
      <MenuScreen show={showMenuScreen}/>
      {tableGame(numberPlayers, positionPlayers)}
    </S.Game>
  );
};

export default Game;

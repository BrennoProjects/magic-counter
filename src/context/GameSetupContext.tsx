import { ReactNode, useState, createContext } from 'react';
import type { FC } from 'react';

export const enum ValuesPosition {
  unset,
  TwoPlayers,
  FourPlayers,
  TwoPlayersLateral,
  FourPlayersLateral,
}

interface StartPlayer {
  id: string
  life: number
  monarch?: boolean
  counters: {
    infect?: number
    poison?: number
    commanderDamage?: number
  }
}

export type PlayerID = 'ID_PLAYER_1' | 'ID_PLAYER_2' | 'ID_PLAYER_3' | 'ID_PLAYER_4';

interface GameSetupDataStructure {
  initialLife: number
  numberPlayers: number
  positionPlayers: ValuesPosition
  players: StartPlayer[]
  setInitialLife: (value: number) => void
  setNumberPlayers: (value: number) => void
  setPositionPlayers: (value: ValuesPosition) => void
  setPlayers?: (value: StartPlayer[]) => void
  handleSetPlayers: (numberPlayers: number, initialLife: number) => void
  handleLifePlayer: (idPlayer: PlayerID, isSum: boolean) => void
  handleSetCounter: (idPlayer: PlayerID, counter: 'infect' | 'poison' | 'commanderDamage' | 'monarch') => void
  handleChangeCounters: (idPlayer: PlayerID, isSum: boolean, counter: 'infect' | 'poison' | 'commanderDamage') => void
}

interface GameSetupProps {
  children: ReactNode
}

const initialGameSetup = {
  initialLife: 0,
  numberPlayers: 0,
  positionPlayers: ValuesPosition.unset,
  players: [{ id: '', life: 0, monarch: false, counters: {} }],
  setInitialLife: () => undefined,
  setNumberPlayers: () => undefined,
  setPositionPlayers: () => undefined,
  handleSetPlayers: () => undefined,
  handleLifePlayer: () => undefined,
  handleSetCounter: () => undefined,
  handleChangeCounters: () => undefined
};

export const GameSetupContext =
  createContext<GameSetupDataStructure>(initialGameSetup);

const GameSetup: FC<GameSetupProps> = (props) => {
  const { children } = props;
  const [initialLife, setInitialLife] = useState<number>(
    initialGameSetup.initialLife
  );
  const [numberPlayers, setNumberPlayers] = useState<number>(
    initialGameSetup.numberPlayers
  );
  const [positionPlayers, setPositionPlayers] = useState<ValuesPosition>(
    initialGameSetup.positionPlayers
  );
  const [players, setPlayers] = useState<StartPlayer[]>(
    initialGameSetup.players
  );

  const handleSetPlayers = (numberPlayers: number, initialLife: number): void => {
    const arrPlayersConstruct = [...Array(numberPlayers).keys()].map(
      (_value, index) => ({ id: `ID_PLAYER_${index + 1}`, life: initialLife, monarch: false, counters: {} })
    );
    setPlayers(arrPlayersConstruct);
  };
  const handleLifePlayer = (idPlayer: PlayerID, isSum: boolean): void => {
    const newArr = [...players];
    newArr.forEach(
      (index, key) => {
        if (index.id === idPlayer) {
          index.life += isSum ? 1 : -1;
        }
        console.log(index);
      }
    );
    setPlayers(newArr);
  };
  const handleSetCounter = (idPlayer: PlayerID, counter: 'infect' | 'poison' | 'commanderDamage' | 'monarch'): void => {
    const newArr = [...players];
    newArr.forEach(
      (index, key) => {
        if (index.id !== idPlayer && counter === 'monarch') {
          index.monarch = false;
        } else if (index.id === idPlayer) {
          switch (counter) {
            case 'infect':
              index.counters.infect = 0;
              break;
            case 'poison':
              index.counters.poison = 0;
              break;
            case 'commanderDamage':
              index.counters.commanderDamage = 0;
              break;
            case 'monarch':
              index.monarch = true;
              break;
          }
        }
        console.log(index);
      }
    );
    setPlayers(newArr);
  };

  const handleChangeCounters = (idPlayer: PlayerID, isSum: boolean, counter: 'infect' | 'poison' | 'commanderDamage'): void => {
    const newArr = [...players];
    newArr.forEach(
      (index, key) => {
        if (index.id === idPlayer) {
          switch (counter) {
            case 'infect':
              if (index.counters.infect !== undefined) {
                index.counters.infect += isSum ? 1 : -1;
                if (index.counters.infect < 0) delete index.counters.infect;
              }
              break;
            case 'poison':
              if (index.counters.poison !== undefined) {
                index.counters.poison += isSum ? 1 : -1;
                if (index.counters.poison < 0) delete index.counters.poison;
              }
              break;
            case 'commanderDamage':
              if (index.counters.commanderDamage !== undefined) {
                index.counters.commanderDamage += isSum ? 1 : -1;
                if (index.counters.commanderDamage < 0) delete index.counters.commanderDamage;
              }
              break;
          }
        }
        console.log(index);
      }
    );
    setPlayers(newArr);
  };

  return (
    <GameSetupContext.Provider
      value={{
        initialLife,
        setInitialLife,
        numberPlayers,
        setNumberPlayers,
        positionPlayers,
        setPositionPlayers,
        players,
        handleSetPlayers,
        handleLifePlayer,
        handleSetCounter,
        handleChangeCounters
      }}
    >
      {children}
    </GameSetupContext.Provider>
  );
};

export default GameSetup;

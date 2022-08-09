import type { FC, ReactNode } from "react";
import { useState, createContext } from "react";

export const enum ValuesPosition {
  unset,
  TwoPlayers,
  FourPlayers,
  TwoPlayersLateral,
  FourPlayersLateral,
}

interface StartPlayer {
  id: string;
  life: number;
}

interface GameSetupDataStructure {
  initialLife: number;
  numberPlayers: number;
  positionPlayers: ValuesPosition;
  players: StartPlayer;
  setInitialLife: (value: number) => void;
  setNumberPlayers: (value: number) => void;
  setPositionPlayers: (value: ValuesPosition) => void;
  setPlayers: (value: StartPlayer) => void;
}



interface GameSetupProps {
  children: ReactNode;
}

const startPlayers: Array<StartPlayer> = [
  {
    id: '',
    life: 0,
  }
]


const initialGameSetup = {
  initialLife: 0,
  numberPlayers: 0,
  positionPlayers: ValuesPosition.unset,
  players: startPlayers[0],
  setInitialLife: () => undefined,
  setNumberPlayers: () => undefined,
  setPositionPlayers: () => undefined,
  setPlayers: () => undefined
};

export const GameSetupContext =
  createContext<GameSetupDataStructure>(initialGameSetup);

export const handleSetPlayers = (numberPlayers: number, initialLife: number) => {
  let interer = 0
  let arrPlayersConstruct = []
  while (interer < numberPlayers) {
    arrPlayersConstruct.push({ id: `ID_PLAYER_${interer + 1}`, life: initialLife })
    interer++
  }
}

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
  const [players, setPlayers] = useState<StartPlayer>(
    startPlayers[0]
  );





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
        setPlayers
      }}
    >
      {children}
    </GameSetupContext.Provider>
  );
};

export default GameSetup;

import type { FC, ReactNode } from "react";
import { useState, createContext } from "react";



export const enum ValuesPosition {
  undefined,
  default = 0,
  twoPlayers = 1,
  twoPlayersLateral = 2,
  fourPlayers = 3,
  fourPlayersLateral = 4,
}

interface GameSetupDataStructure {
  initialLife: number;
  numberPlayers: number;
  positionPlayers: undefined|number;
  setInitialLife: (value: number) => void;
  setNumberPlayers: (value: number) => void;
  setPositionPlayers: (value: ValuesPosition) => void;
}

interface GameSetupProps {
  children: ReactNode;
}

const initialGameSetup = {
  initialLife: 0,
  numberPlayers: 0,
  positionPlayers: ValuesPosition.undefined,
  setInitialLife: () => undefined,
  setNumberPlayers: () => undefined,
  setPositionPlayers: () => ValuesPosition.undefined,
};

export const GameSetupContext = createContext<GameSetupDataStructure>(initialGameSetup);

const GameSetup: FC<GameSetupProps> = (props) => {

  const { children } = props;
  const [initialLife, setInitialLife] = useState<number>(initialGameSetup.initialLife);
  const [numberPlayers, setNumberPlayers] = useState<number>(initialGameSetup.numberPlayers);
  const [positionPlayers, setPositionPlayers] = useState<ValuesPosition>(initialGameSetup.positionPlayers);

  return (
    <GameSetupContext.Provider value={{ initialLife, setInitialLife, numberPlayers, setNumberPlayers, positionPlayers, setPositionPlayers }} enumPosition={ValuesPosition}>
      {children}
    </GameSetupContext.Provider>
  );
};

export default GameSetup

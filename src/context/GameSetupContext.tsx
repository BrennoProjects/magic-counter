import type { FC, ReactNode } from "react";
import { useState, createContext } from "react";




interface GameSetupDataStructure {
  initialLife: number;
  numberPlayers: number;
  positionPlayers: undefined | number;
  setInitialLife: (value: number) => void;
  setNumberPlayers: (value: number) => void;
  //setPositionPlayers: (value: "onePlayer" | "twoPlayers" | "twoPlayersLeteral" | "threePlayers" | "fourPlayers" | "fourPlayersLateral") => void;
  setPositionPlayers: (value: number) => void;
}

interface GameSetupProps {
  children: ReactNode;
}

interface ValuesPosition {
  default: number,
  twoPlayers: number,
  twoPlayersLateral: number,
  fourPlayers: number,
  fourPlayersLateral: number,
}

export const valuesPosition:ValuesPosition = {
  default: 0,
  twoPlayers: 1,
  twoPlayersLateral: 2,
  fourPlayers: 3,
  fourPlayersLateral: 4,
}

const initialGameSetup = {
  initialLife: 0,
  numberPlayers: 0,
  positionPlayers: undefined,
  setInitialLife: () => undefined,
  setNumberPlayers: () => undefined,
  setPositionPlayers: () => undefined,
};

export const GameSetupContext = createContext<GameSetupDataStructure>(initialGameSetup);

const GameSetup: FC<GameSetupProps> = (props) => {
  
  const { children } = props;
  const [initialLife, setInitialLife] = useState<number>(initialGameSetup.initialLife);
  const [numberPlayers, setNumberPlayers] = useState<number>(initialGameSetup.numberPlayers);
  const [positionPlayers, setPositionPlayers] = useState<undefined | number>(initialGameSetup.positionPlayers);

  return (
    <GameSetupContext.Provider value={{ initialLife, setInitialLife, numberPlayers, setNumberPlayers, positionPlayers, setPositionPlayers }}>
      {children}
    </GameSetupContext.Provider>
  );
};

export default GameSetup

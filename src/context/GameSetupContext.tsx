import type {  FC, ReactNode } from "react";
import  { useState, createContext } from "react";

interface GameSetupDataStructure {
  initialLife: number;
  numberPlayers: number;
  setInitialLife: (setInitiaçlLife: number) => void;
  setNumberPlayers: (setNumberPlayers: number) => void;
}

interface GameSetupProps {
  children: ReactNode;
}

const initialGameSetup = {
  initialLife: 0,
  numberPlayers: 0,
  setInitialLife: () => undefined,
  setNumberPlayers: () => undefined,
};

export const GameSetupContext = createContext<GameSetupDataStructure>(initialGameSetup);

const GameSetup: FC<GameSetupProps> = (props) => {
  const { children } = props;
  const [initialLife, setInitialLife] = useState<number>(initialGameSetup.initialLife);
  const [numberPlayers, setNumberPlayers] = useState<number>(initialGameSetup.numberPlayers);
  return(
    <GameSetupContext.Provider value={{initialLife, setInitialLife, numberPlayers, setNumberPlayers}}>
      {children}
    </GameSetupContext.Provider>
  );
};

export default GameSetup

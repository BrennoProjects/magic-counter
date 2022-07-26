import type {  FC, ReactNode } from "react";
import  { useState, createContext } from "react";

interface GameSetupDataStructure {
  initialLife: number;
  playersNumber: number;
  setInitialLife: (setInitiaçlLife: number) => void;
  setPlayersNumber: (setPlayersNumber: number) => void;
}

interface GameSetupProps {
  children: ReactNode;
}

const initialGameSetup = {
  initialLife: 0,
  playersNumber: 0,
  setInitialLife: () => undefined,
  setPlayersNumber: () => undefined,
};

export const GameSetupContext = createContext<GameSetupDataStructure>(initialGameSetup);

const GameSetup: FC<GameSetupProps> = (props) => {
  const { children } = props;
  const [initialLife, setInitialLife] = useState<number>(initialGameSetup.initialLife);
  const [playersNumber, setPlayersNumber] = useState<number>(initialGameSetup.playersNumber);
  return(
    <GameSetupContext.Provider value={{initialLife, setInitialLife, playersNumber, setPlayersNumber}}>
      {children}
    </GameSetupContext.Provider>
  );
};

export default GameSetup

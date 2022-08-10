import type { FC, ReactNode } from "react";
import { useState, createContext } from "react";

export const enum ValuesPosition {
  unset,
  TwoPlayers,
  FourPlayers,
  TwoPlayersLateral,
  FourPlayersLateral,
}

type StartPlayer = {
  id: string;
  life: number;
}

interface GameSetupDataStructure {
  initialLife: number;
  numberPlayers: number;
  positionPlayers: ValuesPosition;
  players: StartPlayer[];
  setInitialLife: (value: number) => void;
  setNumberPlayers: (value: number) => void;
  setPositionPlayers: (value: ValuesPosition) => void;
  setPlayers?: (value: StartPlayer[]) => void;
  handleSetPlayers: (numberPlayers:number, initialLife:number)=>void
}



interface GameSetupProps {
  children: ReactNode;
}

const startPlayers:StartPlayer[] = [
  {
    id: '',
    life: 0,
  }
]


const initialGameSetup = {
  initialLife: 0,
  numberPlayers: 0,
  positionPlayers: ValuesPosition.unset,
  players: startPlayers,
  setInitialLife: () => undefined,
  setNumberPlayers: () => undefined,
  setPositionPlayers: () => undefined,
  setPlayers: () => undefined,
  handleSetPlayers: ()=>undefined 
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
    startPlayers
  );
  
  const handleSetPlayers = (numberPlayers: number, initialLife: number) => {
    let arrPlayersConstruct = []
    arrPlayersConstruct = [...Array(numberPlayers).keys()].map(
      (_value, index) => ({ id: `ID_PLAYER_${index + 1}`, life: initialLife })
    )
    setPlayers(arrPlayersConstruct)
  }
  


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
        handleSetPlayers
      }}
    >
      {children}
    </GameSetupContext.Provider>
  );
};

export default GameSetup;

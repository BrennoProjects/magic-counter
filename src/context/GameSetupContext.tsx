import { FC, ReactNode, useCallback } from "react";
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
  handleSetPlayers: (numberPlayers:number, initialLife:number)=>void,
  handleLifePlayer: (idPlayer: 'ID_PLAYER_1'|'ID_PLAYER_2'|'ID_PLAYER_3'|'ID_PLAYER_4', isSum: boolean)=>void
}



interface GameSetupProps {
  children: ReactNode;
}




const initialGameSetup = {
  initialLife: 0,
  numberPlayers: 0,
  positionPlayers: ValuesPosition.unset,
  players: [{id:'', life: 0}],
  setInitialLife: () => undefined,
  setNumberPlayers: () => undefined,
  setPositionPlayers: () => undefined,
  handleSetPlayers: ()=>undefined,
  handleLifePlayer: ()=>undefined
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
  
  const handleSetPlayers = (numberPlayers: number, initialLife: number) => {
    let arrPlayersConstruct = [...Array(numberPlayers).keys()].map(
      (_value, index) => ({ id: `ID_PLAYER_${index + 1}`, life: initialLife })
    )
    setPlayers(arrPlayersConstruct)
  }
  const handleLifePlayer = (idPlayer: 'ID_PLAYER_1'|'ID_PLAYER_2'|'ID_PLAYER_3'|'ID_PLAYER_4', isSum: boolean) =>{
    players.forEach(
      (index) => {
          if(index.id===idPlayer){
              isSum ? index.life ++ : index.life --
          }
          console.log(index)
      }    
    )
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
        handleSetPlayers,
        handleLifePlayer
      }}
    >
      {children}
    </GameSetupContext.Provider>
  );
};

export default GameSetup;

import type {  FC, ReactNode } from "react";
import  { useState, createContext } from "react";

interface PlayersNumberDataStructure {
  playersNumber: number | undefined;
  setPlayersNumber: (setPlayerNumber: number) => void;
}

interface PlayersNumberProviderProps {
  children: ReactNode;
}

const defaultPlayersNumber = {
  playersNumber: 0,
  setPlayersNumber: () => undefined,
};
export const PlayersNumberContext = createContext<PlayersNumberDataStructure>(defaultPlayersNumber);


const PlayersNumberProvider: FC<PlayersNumberProviderProps> = (props) => {
  const { children } = props;
  const [playersNumber, setPlayersNumber] = useState<number>(defaultPlayersNumber.playersNumber);
  return(
    <PlayersNumberContext.Provider value={{playersNumber, setPlayersNumber}}>
      {children}
    </PlayersNumberContext.Provider>
  );
};

export default PlayersNumberProvider;

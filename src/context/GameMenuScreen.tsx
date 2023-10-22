import { FC, ReactNode, createContext, useState } from 'react';

interface GameMenuDataStructure {
  showMenuScreen: boolean
  setShowMenuScreen: (value: boolean) => void
}
const initialGameMenuScreen: GameMenuDataStructure = {
  showMenuScreen: false,
  setShowMenuScreen: () => undefined
};
interface GameMenuScreenProps {
  children: ReactNode
}

export const GameMenuContext =
  createContext<GameMenuDataStructure>(initialGameMenuScreen);

const GameMenu: FC<GameMenuScreenProps> = (props) => {
  const { children } = props;
  const [showMenu, setShowMenu] = useState(false);

  const valuesProvider: GameMenuDataStructure = {
    showMenuScreen: showMenu,
    setShowMenuScreen: (value: boolean) => setShowMenu(value)
  };

  return (
    <GameMenuContext.Provider
    value={valuesProvider}
    >
      {children}
    </GameMenuContext.Provider>
  );
};

export default GameMenu;

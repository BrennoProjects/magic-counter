import { FC, ReactNode, createContext, useState } from 'react';

interface GameMenuDataStructure {
  showMenuScreen: boolean
  isFirstRender: boolean
  setShowMenuScreen: (value: boolean) => void
  setIsFirstRender: (value: boolean) => void

}
const initialGameMenuScreen: GameMenuDataStructure = {
  showMenuScreen: false,
  isFirstRender: true,
  setShowMenuScreen: () => undefined,
  setIsFirstRender: () => undefined
};
interface GameMenuScreenProps {
  children: ReactNode
}

export const GameMenuContext =
  createContext<GameMenuDataStructure>(initialGameMenuScreen);

const GameMenu: FC<GameMenuScreenProps> = (props) => {
  const { children } = props;
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

  const valuesProvider: GameMenuDataStructure = {
    showMenuScreen: showMenu,
    isFirstRender: isFirstRender,
    setShowMenuScreen: (value: boolean) => setShowMenu(value),
    setIsFirstRender: (value: boolean) => setIsFirstRender(value)
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

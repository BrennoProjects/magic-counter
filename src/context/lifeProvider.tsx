import type {  FC, ReactNode } from "react";
import  { useState, createContext } from "react";

interface LifeDataStructure {
  initialLife: number;
  setInitialLife: (newState: number) => void;
}

interface LifeProviderProps {
  children: ReactNode;
}

const defaultInitialLife = {
  initialLife: 0,
  setInitialLife: () => undefined,
};

export const LifeContext = createContext<LifeDataStructure>(defaultInitialLife);

const LifeProvider: FC<LifeProviderProps> = (props) => {
  const { children } = props;
  const [initialLife, setInitialLife] = useState<number>(defaultInitialLife.initialLife);
  return(
    <LifeContext.Provider value={{initialLife, setInitialLife}}>
      {children}
    </LifeContext.Provider>
  );
};

export default LifeProvider

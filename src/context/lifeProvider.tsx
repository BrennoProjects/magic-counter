import React, { FC, ReactNode, useState } from "react";

const defaultInitialLife = {
  initialLife: 40,
  setInitialLife: () => {},
};

interface lifeContextType {
  initialLife: number;
  setInitialLife: (newState: number) => void;
}

export const lifeContext =
  React.createContext<lifeContextType>(defaultInitialLife);

interface LifeProviderProps {
  children: ReactNode;
}

const lifeProvider: FC<LifeProviderProps> = (props) => {
  const [initialLife, setInitialLife] = useState(defaultInitialLife.initialLife);
  let { children } = props;
  return <lifeContext.Provider value={{initialLife, setInitialLife}}>{children}</lifeContext.Provider>;
};

export default lifeProvider
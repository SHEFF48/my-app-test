"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useReducer,
} from "react";

interface BurgerContextType {
  isToogle: boolean;
  updateValue: () => void;
}

interface BurgerContextProps {
  children?: ReactNode;
}

interface BurgerContextState {
  isToogle: boolean;
}

type BurgerAction = { type: "TOGGLE" };

const burgerReducer = (
  state: BurgerContextState,
  action: BurgerAction
): BurgerContextState => {
  switch (action.type) {
    case "TOGGLE":
      return { isToogle: !state.isToogle };
    default:
      return state;
  }
};

const BurgerContext = createContext<BurgerContextType | undefined>(undefined);

const BurgerContextProvider: React.FC<BurgerContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(burgerReducer, { isToogle: false });

  const updateValue = () => {
    dispatch({ type: "TOGGLE" });
  };

  const contextValue: BurgerContextType = {
    isToogle: state.isToogle,
    updateValue,
  };

  return (
    <BurgerContext.Provider value={contextValue}>
      {children}
    </BurgerContext.Provider>
  );
};

export { BurgerContext, BurgerContextProvider };

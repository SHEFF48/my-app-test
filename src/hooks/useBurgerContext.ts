// useMyContext.ts
import { useContext } from "react";
import { BurgerContext } from "@/context/BurgerCotext";

const useBurgerContext = () => {
  const context = useContext(BurgerContext);
  if (!context) {
    throw new Error(
      "useBurgerContext must be used within a BurgerContextProvider"
    );
  }
  return context;
};

export { useBurgerContext };

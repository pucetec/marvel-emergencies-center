import React, { createContext, useContext, useState } from "react";

const SuperHeroContext = createContext();

export const useSuperHeroContext = () => {
  return useContext(SuperHeroContext);
};

export const SuperHeroProvider = ({ children }) => {
  const [superHeroState, setSuperHeroState] = useState("");

  const setSuperHero = (superHero) => {
    setSuperHeroState(superHero);
  };

  return (
    <SuperHeroContext.Provider value={{ superHero: superHeroState, setSuperHero }}>
      {children}
    </SuperHeroContext.Provider>
  );
};


import React, { createContext, useContext } from 'react';

const HeroesContext = createContext();

export const HeroesProvider = ({ children }) => {
  const heroes = ['SpiderMan', 'Hulk', 'IronMan','Thor','Capitan America']; 

  return (
    <HeroesContext.Provider value={heroes}>
      {children}
    </HeroesContext.Provider>
  );
};

export const useHeroes = () => {
  const context = useContext(HeroesContext);
  if (!context) {
    throw new Error('useHeroes debe utilizarse dentro de un HeroesProvider');
  }
  return context;
};

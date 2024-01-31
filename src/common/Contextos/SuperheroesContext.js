// SuperheroesContext.js
import React, { createContext, useContext, useState } from "react";

const SuperheroesContext = createContext();

const useSuperheroesContext = () => {
  const context = useContext(SuperheroesContext);
  if (!context) {
    throw new Error("useSuperheroesContext debe usarse dentro de SuperheroesProvider");
  }
  return context;
};

const SuperheroesProvider = ({ children }) => {
  const [superheroesList, setSuperheroesList] = useState([
    "Thor",
    "Spiderman",
    "Hulk",
    "Iron Man",
    "Captain America"
  ]);

  return (
    <SuperheroesContext.Provider value={{ superheroesList, setSuperheroesList }}>
      {children}
    </SuperheroesContext.Provider>
  );
};

export { SuperheroesProvider, useSuperheroesContext }; // Elimina cualquier otra exportación de SuperheroesProvider

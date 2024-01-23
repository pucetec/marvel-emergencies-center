import { createContext, useContext, useState } from "react";

const Contexto = createContext();

export const ProveedorDeContexto = ({ children }) => {

  const [emergencia, setEmergencia] = useState("");
  const [list, setList]             = useState([]);


  const addItems = () => { setList( (prevList) => { return [...prevList, emergencia] } ) };


  return (
    <Contexto.Provider value = {{ list, emergencia, setEmergencia, addItems }}>
      { children }
    </Contexto.Provider>
  );
};

export const useContextoGeneral = () => useContext(Contexto);

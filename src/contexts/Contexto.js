import { createContext, useContext, useState } from "react";


const Contexto = createContext();

export const ProveedorDeContexto = ({ children }) => {

  const [emergencia, setEmergencia]       = useState("");
  const [list, setList]                   = useState([]);
  const [listAsignadas, setListAsignadas] = useState([]);

  const heroe = "SuperHéroe";

  const addItems = () => { setList( (prevList) => { return [...prevList, emergencia] } ); setEmergencia(""); };

  const addItemsSeleccionados = (item) => { setListAsignadas( (prevList) => { return [...prevList, item] } ) };

  const regresanLosItems = (item) => { setList( (prevList) => { return [...prevList, item] } ) };


  const borrarElementoIngresos = (item) => {
    const listaNueva = [...list];
    listaNueva.splice(item, 1);
    setList(listaNueva);
  };

  const borrarElementoAsignados = (i) => {
    const listaNuevaAsignadas = [...listAsignadas];
    listaNuevaAsignadas.splice(i, 1);
    setListAsignadas(listaNuevaAsignadas);
  };

  return (
    <Contexto.Provider value = {{ list, emergencia, setEmergencia, addItems, listAsignadas, addItemsSeleccionados, borrarElementoIngresos, borrarElementoAsignados, heroe, regresanLosItems }}>
      { children }
    </Contexto.Provider>
  );
};

export const useContextoGeneral = () => useContext(Contexto);

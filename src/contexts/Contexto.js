import { createContext, useContext, useState } from "react";


const Contexto = createContext();

export const ProveedorDeContexto = ({ children }) => {

  const [emergencia,         setEmergencia]         = useState("");
  const [list,               setList]               = useState([]);
  const [listAsignadas,      setListAsignadas]      = useState([]);
  const [listAsignadasHeroe, setListAsignadasHeroe] = useState([]);
  const [heroe,              setHeroe]              = useState("");

  const listaHeroes = ["Iron Man", "Thor", "Hulk", "Spider-Man"];

  const [modal, setModal] = useState(false);


  const addItems = () => {
    if (emergencia === "") {}
    else {
      setList( (prevList) => { return [...prevList, emergencia] } ); setEmergencia("");
    }
  };


  const addItemsSeleccionados = (item) => {
    setListAsignadas( (prevList) => { return [...prevList, item] } );
    setListAsignadasHeroe( (prevList) => { return [...prevList, heroe] } );
  };


  const regresanLosItems = (item) => { setList( (prevList) => { return [...prevList, item] } ) };


  const borrarElementoIngresos = (i) => {
    const listaNueva = [...list];
    listaNueva.splice(i, 1);
    setList(listaNueva);
  };


  const borrarElementoAsignados = (i) => {
    const listaNuevaAsignadas = [...listAsignadas];
    listaNuevaAsignadas.splice(i, 1);
    setListAsignadas(listaNuevaAsignadas);
    const listaNuevaAsignadasHeroe = [...listAsignadasHeroe];
    listaNuevaAsignadasHeroe.splice(i, 1);
    setListAsignadasHeroe(listaNuevaAsignadasHeroe);
  };


  return (
    <Contexto.Provider value = {{ list, emergencia, setEmergencia, addItems, listAsignadas, addItemsSeleccionados,
     borrarElementoIngresos, borrarElementoAsignados, heroe, setHeroe, listaHeroes, regresanLosItems,
     listAsignadasHeroe, setListAsignadasHeroe, modal, setModal }}>
      { children }
    </Contexto.Provider>
  );
};


export const useContextoGeneral = () => useContext(Contexto);

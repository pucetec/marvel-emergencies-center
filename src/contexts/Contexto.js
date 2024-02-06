import { createContext, useContext, useState } from "react";


const Contexto = createContext();

export const ProveedorDeContexto = ({ children }) => {

  const [emergencia,              setEmergencia]              = useState("");
  const [list,                    setList]                    = useState([]);
  const [listAsignadas,           setListAsignadas]           = useState([]);
  const [listAsignadasHeroe,      setListAsignadasHeroe]      = useState([]);
  const [heroe,                   setHeroe]                   = useState("");
  const [preguntaBorrar,          setPreguntaBorrar]          = useState(false);
  const [indice,                  setIndice]                  = useState(null);
  const [preguntaBorrarAsignadas, setPreguntaBorrarAsignadas] = useState(false);


  const listaHeroes = ["Iron Man", "Thor", "Hulk", "Spider-Man", "Capitán América",
   "Doctor Strange", "Ant-Man", "Wolverine"];

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


  const borrarElementoIngresos = () => {
    const listaNueva = [...list];
    listaNueva.splice(indice, 1);
    setList(listaNueva);
  };


  const borrarElementoAsignados = (indice) => {
    const listaNuevaAsignadas = [...listAsignadas];
    listaNuevaAsignadas.splice(indice, 1);
    setListAsignadas(listaNuevaAsignadas);
    const listaNuevaAsignadasHeroe = [...listAsignadasHeroe];
    listaNuevaAsignadasHeroe.splice(indice, 1);
    setListAsignadasHeroe(listaNuevaAsignadasHeroe);
  };


  return (
    <Contexto.Provider value = {{ list, emergencia, setEmergencia, addItems, listAsignadas, addItemsSeleccionados,
     borrarElementoIngresos, borrarElementoAsignados, heroe, setHeroe, listaHeroes, regresanLosItems,
     listAsignadasHeroe, setListAsignadasHeroe, modal, setModal, preguntaBorrar, setPreguntaBorrar, setIndice,
     preguntaBorrarAsignadas, setPreguntaBorrarAsignadas }}>
      { children }
    </Contexto.Provider>
  );
};


export const useContextoGeneral = () => useContext(Contexto);

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import md5 from "md5";
//import env from "react-dotenv";

const heroContext = createContext();

const GATEWAY =
  "https://gateway.marvel.com:443/v1/public/characters?limit=10&apikey=";
export const marvelAPI = async () => {
  const currentTimestamp = Date.now().toString();
  const joinedKey =
    currentTimestamp +
    "22bae52ad707a821afe20313ae503c0f4fef05c1" +
    "25b891df0f023ac464f95418a319d27e";
  const md5Key = md5(joinedKey);

  //Intenté el uso de env como estaba en el ejemplo pero al ejecutar el programa
  //obtenía un error de que las keys eran undefined, así que opté por hacerlo así.

  const response = await axios.get(
    GATEWAY +
      "25b891df0f023ac464f95418a319d27e" +
      "&ts=" +
      currentTimestamp +
      "&hash=" +
      md5Key,
    {
      headers: {
        Accept: "*/*",
      },
    }
  );
  return response;
};

export const HeroProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [emergencyList, setEmergencyList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [assignedEmergensyList, setAssignedEmergencyList] = useState([]);
  const [currentEmergency, setCurrentEmergency] = useState(null);
  const [currentHeroe, setCurrentHeroe] = useState("");
  const [currentId, setCurrentId] = useState(null);

  const getCurrentId = (id) => {
    setCurrentId(id);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const setEmergency = (emergencyName) => {
    setCurrentEmergency(emergencyName);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await marvelAPI();
      setData(response);
    };

    fetchData();
  }, []);

  const updateAssignedemergensyList = (newItem) => {
    let { id } = newItem;
    setAssignedEmergencyList((prevList) => [...prevList, newItem]);
    deleteFromEmergencyList(id);
  };

  const updateEmergencyList = (newItem) => {
    setEmergencyList((prevList) => [...prevList, newItem]);
  };

  const deleteFromEmergencyList = (id) => {
    let resultado = window.confirm(
      "¿Deseas borrar este elemento? (Si es para ASIGNAR pulsa 'Aceptar')"
    );
    if (resultado === true) {
      setEmergencyList((prevList) => prevList.filter((item) => item.id !== id));
    } else {
    }
  };
  const deleteFromAssignedList = (id) => {
    let resultado = window.confirm("¿Deseas borrar este elemento?");
    if (resultado === true) {
      setAssignedEmergencyList((prevList) =>
        prevList.filter((item) => item.id !== id)
      );
    } else {
    }
  };

  return (
    <heroContext.Provider
      value={{
        data,
        emergencyList,
        updateEmergencyList,
        deleteFromEmergencyList,
        isModalOpen,
        openModal,
        closeModal,
        setCurrentHeroe,
        currentHeroe,
        currentEmergency,
        assignedEmergensyList,
        updateAssignedemergensyList,
        deleteFromAssignedList,
        setAssignedEmergencyList,
        setEmergency,
        getCurrentId,
        currentId,
      }}
    >
      {children}
    </heroContext.Provider>
  );
};

export const useMarvelAPI = () => useContext(heroContext);
